import { motion, Variants } from "framer-motion";
import { TrendingUp, Target, LineChart, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

// ✅ Typed animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description:
        "Strategic planning and growth management to drive your business forward with data-driven insights.",
    },
    {
      icon: Target,
      title: "Financial Consulting",
      description:
        "Expert financial structuring, budgeting, and funding readiness for sustainable growth.",
    },
    {
      icon: LineChart,
      title: "Startup Advisory",
      description:
        "Comprehensive guidance to help new businesses establish strong foundations and scale successfully.",
    },
  ];

  const trustPoints = [
    "Bank-Trusted Reports",
    "Measurable Results",
    "Data-Driven Strategy",
    "Proven Track Record",
  ];

  return (
    <section id="home" className="pt-16">
      {/* ✅ Hero Section */}
      <div className="relative py-12 md:py-24 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-10 xl:gap-16">
            {/* Left Content */}
            <motion.div
              className="relative z-20 lg:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white p-6 sm:p-10 md:p-14 lg:p-16 rounded-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your Business Vision
                  <span className="block text-[#1e3a8a] mt-2">
                    Into Reality
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                  5D Vision provides strategic consulting services that empower
                  businesses to achieve sustainable growth. We deliver
                  measurable results through data-driven insights, trusted by
                  financial institutions and business leaders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg hover:bg-[#1e40af] transition-all duration-300 font-semibold text-center"
                  >
                    Book a Consultation
                  </a>
                  <a
                    href="#services"
                    className="bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-center"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image */}
            <motion.div
              className="relative order-1 lg:order-2 flex justify-center items-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Services Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-2xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Our Core Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <service.icon className="w-14 h-14 text-[#1e3a8a] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Trust Section */}
      <motion.div
        className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
            Trusted by Business Leaders
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-100 mb-12 max-w-3xl mx-auto">
            We deliver consulting services that financial institutions and
            businesses rely on for critical decisions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white font-semibold text-center">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
