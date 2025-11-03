import { motion, Variants } from "framer-motion";
import {
  TrendingUp,
  Target,
  Rocket,
  Cog,
  Building2,
  Code,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description:
        "Strategic planning and operational excellence for sustainable growth.",
      benefits: [
        "Comprehensive business strategy development",
        "Market analysis and competitive positioning",
        "Growth roadmap and execution planning",
        "Performance metrics and KPI tracking",
        "Risk assessment and mitigation strategies",
      ],
    },
    {
      icon: Target,
      title: "Financial Consulting",
      description:
        "Expert financial guidance to optimize your business structure and funding.",
      benefits: [
        "Financial modeling and forecasting",
        "Budget planning and cost optimization",
        "Capital structure and funding strategy",
        "Bank-ready financial documentation",
        "Cash flow management and analysis",
      ],
    },
    {
      icon: Rocket,
      title: "Startup Advisory",
      description:
        "Comprehensive support to help new businesses launch and scale successfully.",
      benefits: [
        "Business model validation and refinement",
        "Go-to-market strategy development",
        "Funding readiness and investor pitch preparation",
        "Legal and regulatory compliance guidance",
        "Team building and organizational design",
      ],
    },
  ];

  const industries = [
    {
      icon: Briefcase,
      name: "Small & Medium Businesses",
      description:
        "Tailored strategies for SMBs looking to scale and optimize operations.",
    },
    {
      icon: Building2,
      name: "Real Estate & Construction",
      description:
        "Specialized consulting for property development and construction firms.",
    },
    {
      icon: Code,
      name: "Technology Startups",
      description: "Growth strategies and funding guidance for tech companies.",
    },
    {
      icon: ShoppingBag,
      name: "Retail & Services",
      description:
        "Customer-focused strategies for retail and service businesses.",
    },
  ];

  const whyChoose = [
    {
      title: "Experienced Professionals",
      description:
        "Our team brings decades of combined experience across multiple industries and business functions.",
    },
    {
      title: "Bank-Trusted Documentation",
      description:
        "We produce consulting reports and financial analyses that financial institutions rely on for lending decisions.",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Every recommendation is backed by thorough analysis, industry benchmarks, and real-world experience.",
    },
    {
      title: "Transparent Process",
      description:
        "We maintain clear communication throughout the engagement with regular updates and collaborative decision-making.",
    },
  ];

  // Animation presets
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#3b82f6] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to transform your
            business challenges into opportunities for growth and success.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-lg hover:shadow-2xl hover:border-[#3b82f6]/50 transition-all duration-500 overflow-hidden"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Icon + Title Section */}
              <div className="p-8 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white flex flex-col items-center justify-center text-center relative z-10">
                <div className="bg-white/20 p-5 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-100 text-sm leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start text-gray-300 text-sm"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="w-2.5 h-2.5 mt-2 mr-3 bg-[#3b82f6] rounded-full flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:border-[#3b82f6]/50 border border-gray-700 transition-all duration-300 text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
              >
                <industry.icon className="w-12 h-12 text-[#3b82f6] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">
                  {industry.name}
                </h4>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12 tracking-wide">
            Why Choose 5D Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-5"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
