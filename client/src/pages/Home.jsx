import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Enhanced Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100"></div>
        
        {/* More vibrant decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
                Vouchr
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Transforming communities through seamless volunteer coordination and meaningful impact measurement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 hover:from-purple-800 hover:via-blue-800 hover:to-indigo-900 text-white px-10 py-5 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-transparent hover:border-purple-300">
                Start Volunteering
              </button>
              <button className="border-2 border-purple-400 hover:border-purple-600 text-purple-700 hover:text-purple-800 hover:bg-purple-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Empowering Change Through Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform bridges the gap between passionate volunteers and meaningful opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Making a Real Difference
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of volunteers who are creating positive change in their communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-6xl font-black text-white mb-3 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-purple-200 text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Vouchr, we believe that every person has the power to make a difference. Our volunteer management system breaks down barriers, connects hearts with causes, and amplifies the impact of every good deed.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just managing volunteers – we're building a movement of compassionate individuals who are reshaping the world, one act of kindness at a time.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Impact Driven
                </span>
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Community Focused
                </span>
                <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Technology Enabled
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">🤝</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Hearts Connected</h3>
                  <p className="text-purple-100 text-lg">Where passion meets purpose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and start your journey toward creating meaningful impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 hover:from-purple-800 hover:via-blue-800 hover:to-indigo-900 text-white px-10 py-5 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-purple-300">
              Get Started Now
            </button>
            <button className="border-2 border-purple-400 hover:border-purple-600 text-purple-700 hover:text-purple-800 hover:bg-purple-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-purple-100 hover:border-purple-300">
    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mb-6 shadow-lg">
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const features = [
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.5m-9 3.75h7.5m-7.5 3h7.5m-7.5 3h7.5m-7.5 3h7.5",
    title: "Smart Volunteer Matching",
    description: "Our AI-powered system connects volunteers with opportunities that align with their skills, interests, and availability for maximum impact."
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Real-time Impact Tracking",
    description: "Monitor and measure the tangible difference you're making with comprehensive analytics and impact reporting tools."
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Location-Based Opportunities",
    description: "Discover volunteer opportunities in your neighborhood and track your service hours with integrated geolocation features."
  }
];

const stats = [
  { number: "50K+", label: "Active Volunteers" },
  { number: "2M+", label: "Hours Contributed" },
  { number: "1,200+", label: "Organizations" },
  { number: "95%", label: "Satisfaction Rate" }
];

export default Home;