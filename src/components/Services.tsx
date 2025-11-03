import { TrendingUp, Target, Rocket, Cog, Building2, Code, ShoppingBag, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Strategic planning and operational excellence for sustainable growth.',
      benefits: [
        'Comprehensive business strategy development',
        'Market analysis and competitive positioning',
        'Growth roadmap and execution planning',
        'Performance metrics and KPI tracking',
        'Risk assessment and mitigation strategies',
      ],
    },
    {
      icon: Target,
      title: 'Financial Consulting',
      description: 'Expert financial guidance to optimize your business structure and funding.',
      benefits: [
        'Financial modeling and forecasting',
        'Budget planning and cost optimization',
        'Capital structure and funding strategy',
        'Bank-ready financial documentation',
        'Cash flow management and analysis',
      ],
    },
    {
      icon: Rocket,
      title: 'Startup Advisory',
      description: 'Comprehensive support to help new businesses launch and scale successfully.',
      benefits: [
        'Business model validation and refinement',
        'Go-to-market strategy development',
        'Funding readiness and investor pitch preparation',
        'Legal and regulatory compliance guidance',
        'Team building and organizational design',
      ],
    },
    {
      icon: Cog,
      title: 'Process Optimization',
      description: 'Streamline operations and maximize efficiency across your organization.',
      benefits: [
        'Operational efficiency audits',
        'Workflow analysis and improvement',
        'Technology integration and automation',
        'Quality management systems',
        'Cost reduction and productivity enhancement',
      ],
    },
  ];

  const industries = [
    {
      icon: Briefcase,
      name: 'Small & Medium Businesses',
      description: 'Tailored strategies for SMBs looking to scale and optimize operations.',
    },
    {
      icon: Building2,
      name: 'Real Estate & Construction',
      description: 'Specialized consulting for property development and construction firms.',
    },
    {
      icon: Code,
      name: 'Technology Startups',
      description: 'Growth strategies and funding guidance for tech companies.',
    },
    {
      icon: ShoppingBag,
      name: 'Retail & Services',
      description: 'Customer-focused strategies for retail and service businesses.',
    },
  ];

  const whyChoose = [
    {
      title: 'Experienced Professionals',
      description: 'Our team brings decades of combined experience across multiple industries and business functions.',
    },
    {
      title: 'Bank-Trusted Documentation',
      description: 'We produce consulting reports and financial analyses that financial institutions rely on for lending decisions.',
    },
    {
      title: 'Data-Driven Approach',
      description: 'Every recommendation is backed by thorough analysis, industry benchmarks, and real-world experience.',
    },
    {
      title: 'Transparent Process',
      description: 'We maintain clear communication throughout the engagement with regular updates and collaborative decision-making.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to transform your business challenges
            into opportunities for growth and success.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-8 flex flex-col justify-center items-center text-center">
                  <service.icon className="w-20 h-20 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-100">
                    {service.description}
                  </p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
              >
                <industry.icon className="w-12 h-12 text-[#1e3a8a] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {industry.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose 5D Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
