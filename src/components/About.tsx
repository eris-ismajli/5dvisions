import { Shield, Lightbulb, Eye, BarChart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in every engagement, building trust through transparency and honesty.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge strategies and modern solutions to solve complex business challenges.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We see beyond the present, helping businesses anticipate trends and prepare for future success.',
    },
    {
      icon: BarChart,
      title: 'Measurable Impact',
      description: 'Every recommendation we make is backed by data and designed to deliver quantifiable results.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About 5D Vision
          </h2>
          <div className="w-24 h-1 bg-[#1e3a8a] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            5D Vision is a premier business consulting firm dedicated to empowering organizations
            through strategic guidance, financial expertise, and innovative solutions. We partner
            with businesses to unlock their full potential and achieve sustainable growth.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded on the principle that every business deserves access to world-class consulting,
            5D Vision brings together experienced professionals who understand the complexities of
            modern business operations. Our team has worked with companies across diverse industries,
            from ambitious startups to established enterprises.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            What sets us apart is our commitment to delivering consulting services that financial
            institutions trust. Our reports and recommendations are recognized for their accuracy,
            depth, and practical applicability, making us the go-to partner for businesses seeking
            funding, optimization, or strategic transformation.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-[#1e3a8a] p-3 rounded-lg flex-shrink-0">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-95">
              To empower businesses with strategic insights, financial expertise, and innovative
              solutions that drive measurable growth and create lasting value for stakeholders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-95">
              To be the most trusted consulting partner for businesses worldwide, recognized for
              our integrity, innovation, and ability to transform challenges into opportunities.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-gray-50 to-white p-12 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Experience That Delivers
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings decades of combined experience across finance, operations,
            and strategic management. We've helped businesses secure funding, optimize operations,
            and achieve breakthrough growth. Every engagement is led by senior consultants who bring
            real-world expertise and a commitment to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
