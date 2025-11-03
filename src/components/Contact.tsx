import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Animation presets
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage(
      "Thank you for your message! We will get back to you within 24 hours."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@5dvision.com",
      link: "mailto:info@5dvision.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Business District, Corporate Center",
      link: null,
    },
  ];

  // animation variants
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  // };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#1e3a8a] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{
              scaleX: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today to schedule a
            consultation and discover how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Form Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "phone"].map((field) => (
                  <motion.div key={field} variants={fadeUp}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {field === "name"
                        ? "Full Name"
                        : field === "email"
                        ? "Email Address"
                        : "Phone Number"}
                    </label>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required={field !== "phone"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition-all"
                      placeholder={
                        field === "name"
                          ? "John Smith"
                          : field === "email"
                          ? "john@company.com"
                          : "+1 (555) 123-4567"
                      }
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your business needs..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1e3a8a] text-white px-6 py-4 rounded-lg hover:bg-[#1e40af] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Info Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl shadow-lg p-8 text-white mb-8"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.15, duration: 0.6 },
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-100 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-100">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
