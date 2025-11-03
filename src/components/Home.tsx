import { TrendingUp, Target, LineChart, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Strategic planning and growth management to drive your business forward with data-driven insights.',
    },
    {
      icon: Target,
      title: 'Financial Consulting',
      description: 'Expert financial structuring, budgeting, and funding readiness for sustainable growth.',
    },
    {
      icon: LineChart,
      title: 'Startup Advisory',
      description: 'Comprehensive guidance to help new businesses establish strong foundations and scale successfully.',
    },
  ];

  const trustPoints = [
    'Bank-Trusted Reports',
    'Measurable Results',
    'Data-Driven Strategy',
    'Proven Track Record',
  ];

  return (
    <section id="home" className="pt-16">
      <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1e3a8a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ca3af] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business Vision
              <span className="block text-[#1e3a8a] mt-2">Into Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              5D Vision provides strategic consulting services that empower businesses to achieve sustainable growth.
              We deliver measurable results through data-driven insights, trusted by financial institutions and business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg hover:bg-[#1e40af] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <service.icon className="w-14 h-14 text-[#1e3a8a] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            Trusted by Business Leaders
          </h2>
          <p className="text-xl text-center text-gray-100 mb-12 max-w-3xl mx-auto">
            We deliver consulting services that financial institutions and businesses rely on for critical decisions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
