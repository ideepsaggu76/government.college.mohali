import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      id: 1,
      title: "Welcome to Government College",
      subtitle: "Shaheed Major Harminderpal Singh (Shaurya Chakra)",
      description: "Established in 1984, providing quality education in Sahibzada Ajit Singh Nagar, Mohali.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      cta: "Explore Courses",
      link: "/courses"
    },
    {
      id: 2,
      title: "NAAC B++ Accredited College",
      subtitle: "Excellence in Education",
      description: "Committed to providing quality education with modern facilities and experienced faculty.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      cta: "About Us",
      link: "/about"
    },
    {
      id: 3,
      title: "Student Portal",
      subtitle: "Easy Access to Resources",
      description: "Manage your academics, fees, and access learning resources with our student portal.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      cta: "Login Now",
      link: "/student-portal"
    }
  ];

  const courses = [
    { id: 1, name: "B.Com", icon: "📊", category: "undergraduate" },
    { id: 2, name: "B.Sc (Medical)", icon: "🧬", category: "undergraduate" },
    { id: 3, name: "B.Sc (Non-Medical)", icon: "🔬", category: "undergraduate" },
    { id: 4, name: "B.Sc (Computer Science)", icon: "💻", category: "undergraduate" },
    { id: 5, name: "BA", icon: "📚", category: "undergraduate" },
    { id: 6, name: "BCA", icon: "🖥️", category: "undergraduate" },
    { id: 7, name: "M.Sc Chemistry", icon: "⚗️", category: "postgraduate" },
    { id: 8, name: "M.Sc Mathematics", icon: "🔢", category: "postgraduate" },
    { id: 9, name: "M.Sc (IT)", icon: "🌐", category: "postgraduate" },
    { id: 10, name: "MA English", icon: "📝", category: "postgraduate" },
    { id: 11, name: "MA Fine Arts", icon: "🎨", category: "postgraduate" },
    { id: 12, name: "MA Punjabi", icon: "🔤", category: "postgraduate" },
  ];

  const announcements = [
    { id: 1, title: "Admission Open for 2025-26", date: "May 15, 2025" },
    { id: 2, title: "Annual Sports Meet on June 10", date: "May 10, 2025" },
    { id: 3, title: "Scholarship Forms Available", date: "May 5, 2025" },
    { id: 4, title: "Cultural Fest 'Rhythm 2025' Registration", date: "April 25, 2025" },
    { id: 5, title: "Summer Break Schedule Announced", date: "April 20, 2025" },
  ];

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[70vh] overflow-hidden bg-gray-900">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="container-custom h-full flex items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-white"
              >
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-md mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.description}</p>
                <Link
                  to={slide.link}
                  className="btn btn-primary"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
        
        {/* Slider Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? "bg-primary-500 w-8"
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Announcement Bar */}
      <section className="bg-primary-900 text-white py-3 relative overflow-hidden">
        <div className="container-custom flex items-center">
          <span className="font-semibold text-primary-200 mr-4 shrink-0">Latest Updates:</span>
          <div className="overflow-hidden relative w-full">
            <div className="animate-marquee whitespace-nowrap">
              {announcements.map((announcement) => (
                <span key={announcement.id} className="mx-4 inline-block">
                  <span className="font-medium">{announcement.title}</span>
                  <span className="text-primary-300 ml-2">({announcement.date})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to SMHS(SC) Government College</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Established in 1984, our NAAC B++ accredited college provides quality education with modern facilities
              and experienced faculty. We focus on holistic development through academics, sports, and cultural activities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Offering diverse courses with modern teaching methodologies and experienced faculty.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Well-equipped labs, library, sports facilities, and smart classrooms for enhanced learning.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Focus on academics, sports, cultural activities, and personality development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs We Offer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our diverse range of undergraduate and postgraduate programs designed to prepare you for a successful career.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="font-bold">{course.name}</h3>
                <span className="text-xs uppercase text-gray-500 dark:text-gray-400">
                  {course.category}
                </span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Notice Board Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notice Board</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay updated with the latest announcements and events at our college.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-650 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">{announcement.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{announcement.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/notices" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              View All Notices →
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.6 }}
              className="md:w-2/3 mb-8 md:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our College?</h2>
              <p className="text-lg text-primary-100">
                Admissions for academic year 2025-26 are now open. Apply today to secure your spot!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/student-portal"
                className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-lg hover:shadow-xl font-medium px-8 py-3 rounded-lg"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 