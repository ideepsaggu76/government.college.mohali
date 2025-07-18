import { useState } from 'react';
import { motion } from 'framer-motion';

// Define course types
type CourseCategory = 'all' | 'undergraduate' | 'postgraduate' | 'diploma';

interface Course {
  id: number;
  name: string;
  category: CourseCategory;
  duration: string;
  description: string;
  eligibility: string;
  icon: string;
}

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState<CourseCategory>('all');
  
  // Define all courses offered
  const courses: Course[] = [
    // Undergraduate Courses
    {
      id: 1,
      name: 'B.Com',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'The Bachelor of Commerce program provides a strong foundation in commerce, accounting, economics, and business management.',
      eligibility: '10+2 with 50% marks in any stream',
      icon: '📊'
    },
    {
      id: 2,
      name: 'B.Sc (Medical)',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'This program focuses on biology, zoology, and chemistry, preparing students for careers in healthcare and research.',
      eligibility: '10+2 with 50% marks in medical stream',
      icon: '🧬'
    },
    {
      id: 3,
      name: 'B.Sc (Non-Medical)',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'The program covers physics, chemistry, and mathematics, providing a foundation for engineering and scientific careers.',
      eligibility: '10+2 with 50% marks in non-medical stream',
      icon: '🔬'
    },
    {
      id: 4,
      name: 'B.Sc (Computer Science)',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'This program combines computer science with mathematics and physics, preparing students for IT careers.',
      eligibility: '10+2 with 50% marks in non-medical stream',
      icon: '💻'
    },
    {
      id: 5,
      name: 'BA',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'The Bachelor of Arts program offers various subjects in humanities and social sciences like English, History, Political Science, etc.',
      eligibility: '10+2 with 45% marks in any stream',
      icon: '📚'
    },
    {
      id: 6,
      name: 'BCA',
      category: 'undergraduate',
      duration: '3 Years',
      description: 'Bachelor of Computer Applications focuses on computer applications and software development.',
      eligibility: '10+2 with 50% marks in any stream with Mathematics',
      icon: '🖥️'
    },
    
    // Postgraduate Courses
    {
      id: 7,
      name: 'M.Sc Chemistry',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'The Master of Science in Chemistry program provides advanced study in all areas of chemistry with research opportunities.',
      eligibility: 'B.Sc with 50% marks in Chemistry',
      icon: '⚗️'
    },
    {
      id: 8,
      name: 'M.Sc Mathematics',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'This program provides advanced study in pure and applied mathematics with research emphasis.',
      eligibility: 'B.Sc with 50% marks in Mathematics',
      icon: '🔢'
    },
    {
      id: 9,
      name: 'M.Sc (IT)',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'Master of Science in Information Technology focuses on advanced IT concepts and technologies.',
      eligibility: 'BCA or B.Sc(IT) with 50% marks',
      icon: '🌐'
    },
    {
      id: 10,
      name: 'MA English',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'This program offers advanced study in English literature, linguistics, and literary criticism.',
      eligibility: 'BA with 50% marks in English',
      icon: '📝'
    },
    {
      id: 11,
      name: 'MA Fine Arts',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'Master of Arts in Fine Arts focuses on advanced techniques and theory in various art forms.',
      eligibility: 'BA with 50% marks in Fine Arts',
      icon: '🎨'
    },
    {
      id: 12,
      name: 'MA Punjabi',
      category: 'postgraduate',
      duration: '2 Years',
      description: 'This program offers advanced study in Punjabi literature, linguistics, and cultural studies.',
      eligibility: 'BA with 50% marks in Punjabi',
      icon: '🔤'
    },
    
    // Diploma Courses
    {
      id: 13,
      name: 'Diploma in Food Production',
      category: 'diploma',
      duration: '1 Year',
      description: 'This program provides practical training in food production techniques and management.',
      eligibility: '10+2 in any stream',
      icon: '🍲'
    },
    {
      id: 14,
      name: 'PGDCA',
      category: 'diploma',
      duration: '1 Year',
      description: 'Post Graduate Diploma in Computer Applications offers specialized training in computer applications.',
      eligibility: 'Graduation in any discipline',
      icon: '💾'
    }
  ];
  
  // Filter courses based on active tab
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700 dark:bg-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl text-primary-100 mb-6">
              Discover the right academic path for your future career
            </p>
            <div className="w-20 h-1 bg-primary-400 rounded-full"></div>
          </motion.div>
        </div>
      </section>
      
      {/* Courses Filter Tabs */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('undergraduate')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'undergraduate'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Undergraduate
            </button>
            <button
              onClick={() => setActiveTab('postgraduate')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'postgraduate'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Postgraduate
            </button>
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'diploma'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Diploma Courses
            </button>
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{course.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{course.duration}</p>
                    </div>
                    <div className="text-4xl">{course.icon}</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {course.description}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <h4 className="font-semibold mb-1">Eligibility:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {course.eligibility}
                    </p>
                  </div>
                </div>
                <div className="bg-primary-600 text-white py-3 px-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase tracking-wide bg-white/20 rounded-full px-2 py-1">
                        {course.category}
                      </span>
                    </div>
                    <button className="text-sm font-medium hover:underline">
                      More Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* If no courses match the filter */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No courses found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Follow these simple steps to apply for admission to your chosen program
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Online Registration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Register on the student portal and fill the application form
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Document Upload</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload required documents and pay the application fee
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Review</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wait for application review and admission list publication
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary-600 dark:text-primary-400 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fee Payment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pay fee and complete admission formalities
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/student-portal" 
              className="btn btn-primary"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our courses and admission process
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">When does the admission process start?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The admission process typically begins in May-June after the announcement of 10+2 and graduation results. Specific dates are published on our website and in newspapers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Is there any entrance exam for admission?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Most courses do not require entrance exams. Admissions are merit-based on the qualifying examination marks. However, some specialized programs might have department-specific tests.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">Are there any scholarships available?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, various scholarships are available for meritorious students, sports achievers, and those from economically weaker sections. Details can be found in the scholarship section of our website.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-2">What documents are required for admission?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Typically required documents include: matriculation certificate, qualifying examination marksheet, character certificate, migration certificate (if applicable), passport-size photographs, and category certificate (if applicable).
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage; 