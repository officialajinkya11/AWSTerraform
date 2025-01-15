import React from 'react';
import { Printer, Phone, Mail, MapPin, Palette, Clock, Zap, PenTool, Layers, FileText, Image, Package } from 'lucide-react';

function App() {
  const services = [
    {
      title: "Screen Printing",
      icon: <PenTool className="w-8 h-8" />,
      items: ["Apparel", "Bags", "Posters"]
    },
    {
      title: "Offset Printing",
      icon: <Layers className="w-8 h-8" />,
      items: ["High-Volume Production", "Exceptional Quality", "Cost-Effective Solutions"]
    },
    {
      title: "Digital Printing",
      icon: <Printer className="w-8 h-8" />,
      items: ["Versatility", "Quick Turnaround", "Customization"]
    },
    {
      title: "Stationery Solutions",
      icon: <FileText className="w-8 h-8" />,
      items: ["Wedding Invitations", "Letterheads", "Business Cards"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Printer className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">CHANDRAKANT MUDRANALAY</h1>
                <p className="text-blue-200">Your Printing Partner</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+919890673074" className="flex items-center space-x-2 hover:text-blue-200">
                <Phone className="w-5 h-5" />
                <span>+91 9890673074</span>
              </a>
              <a href="#contact" className="bg-blue-700 px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1920)`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">All Solutions Under One Roof</h2>
          <p className="text-xl mb-8 max-w-2xl">We offer comprehensive printing services for all your needs, from business cards to large-format banners.</p>
          <a 
            href="#services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Printing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Marketing Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brochures</h3>
              <p className="text-gray-600">Informative and visually appealing brochures to engage your target audience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pamphlets</h3>
              <p className="text-gray-600">Compact and informative pamphlets for sharing key messages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Package className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flex Printing</h3>
              <p className="text-gray-600">Durable and weather-resistant flex banners for outdoor advertising.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+91 9890673074 / +91 9028421874</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>purushottamalhat@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>Sr. no. 10, Kamraj Nagar, Shivraj Chowk,</p>
                    <p>Behind Datta Mandir, Yerwada</p>
                    <p>Pune - 411006</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=800"
                  alt="Printing Press"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Chandrakant Mudranalay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;