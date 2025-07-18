import { motion } from 'framer-motion';

const NaacPage = () => {
  const criteriaData = [
    {
      id: 1,
      title: "Curricular Aspects",
      description: "Our institution offers a wide range of academic programs designed to meet the diverse needs of students. We regularly update our curriculum based on industry trends and feedback from stakeholders.",
      score: "3.8/4",
      highlights: [
        "Regular curriculum updates with industry collaboration",
        "Choice-based credit system for all programs",
        "Integration of cross-cutting issues relevant to gender, environment, and human values",
        "Structured feedback system from all stakeholders"
      ]
    },
    {
      id: 2,
      title: "Teaching-Learning and Evaluation",
      description: "We employ student-centric methods that enhance learning experiences and encourage active participation. Our faculty members use innovative teaching methodologies and technology-enabled learning tools.",
      score: "3.7/4",
      highlights: [
        "Student-centric learning methods with experiential learning focus",
        "Continuous internal assessment system",
        "Advanced ICT tools for enhanced teaching-learning",
        "Mentor-mentee system for personalized guidance"
      ]
    },
    {
      id: 3,
      title: "Research, Innovations and Extension",
      description: "Our institution promotes research culture and innovation ecosystem. We have established research centers and encourage faculty and students to engage in research activities.",
      score: "3.5/4",
      highlights: [
        "Dedicated research centers with modern facilities",
        "Regular workshops on research methodology",
        "Financial support for research publications",
        "Active MoUs with research organizations and industries"
      ]
    },
    {
      id: 4,
      title: "Infrastructure and Learning Resources",
      description: "We provide state-of-the-art infrastructure including classrooms, laboratories, library, and sports facilities to support academic and co-curricular activities.",
      score: "3.9/4",
      highlights: [
        "Smart classrooms with modern teaching aids",
        "Well-equipped laboratories with latest equipment",
        "Extensive library resources with digital access",
        "Sports complex with indoor and outdoor facilities"
      ]
    },
    {
      id: 5,
      title: "Student Support and Progression",
      description: "We offer comprehensive support services to students including scholarships, career guidance, and placement assistance. We also encourage student participation in sports and cultural activities.",
      score: "3.6/4",
      highlights: [
        "Transparent scholarship and financial aid system",
        "Active placement cell with industry connections",
        "Career counseling and soft skills development programs",
        "Active student council and cultural committees"
      ]
    },
    {
      id: 6,
      title: "Governance, Leadership and Management",
      description: "Our institution has a well-defined organizational structure with effective leadership. We have implemented e-governance in administration, finance, and student support services.",
      score: "3.7/4",
      highlights: [
        "Decentralized governance structure",
        "Strategic planning and deployment documents",
        "E-governance in all administrative areas",
        "Regular faculty development programs"
      ]
    },
    {
      id: 7,
      title: "Institutional Values and Best Practices",
      description: "We promote gender equity, environmental consciousness, and inclusive practices. We have implemented several best practices that have contributed to the overall development of the institution.",
      score: "3.8/4",
      highlights: [
        "Gender equity promotion programs",
        "Renewable energy and water conservation initiatives",
        "Green campus initiatives and waste management",
        "Code of ethics for research and professional practices"
      ]
    }
  ];

  const documents = [
    { name: "Self Study Report (SSR)", link: "#" },
    { name: "Annual Quality Assurance Report", link: "#" },
    { name: "NAAC Certificate", link: "#" },
    { name: "Peer Team Report", link: "#" },
    { name: "Academic Calendar", link: "#" },
    { name: "Institutional Development Plan", link: "#" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">NAAC Accreditation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our institution is proud to be accredited by the National Assessment and Accreditation Council (NAAC) with an 'A+' grade, reflecting our commitment to quality education and excellence.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">NAAC Accreditation Details</h2>
            <p className="text-gray-600 mb-4">
              The National Assessment and Accreditation Council (NAAC) is an organization that assesses and accredits higher education institutions in India.
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">Accreditation Grade:</span> <span className="text-green-600 font-bold">A+</span></p>
              <p><span className="font-semibold">CGPA:</span> <span className="text-green-600 font-bold">3.71/4.0</span></p>
              <p><span className="font-semibold">Validity Period:</span> 2020-2025</p>
              <p><span className="font-semibold">Cycle:</span> 3rd Cycle</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center border-4 border-blue-500">
              <div className="text-center">
                <span className="block text-5xl font-bold text-blue-800">A+</span>
                <span className="block text-xl text-gray-600">Grade</span>
                <span className="block text-lg font-semibold text-green-600">3.71/4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Criteria-wise Scores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteriaData.map((criteria) => (
            <div key={criteria.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">{criteria.title}</h3>
                <p className="text-right font-semibold text-blue-200">Score: {criteria.score}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{criteria.description}</p>
                <h4 className="font-semibold text-blue-700 mb-2">Key Highlights:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {criteria.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">NAAC Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <a 
              key={index} 
              href={doc.link} 
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex items-center space-x-3"
            >
              <div className="bg-blue-100 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700">{doc.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Quality Initiatives</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Internal Quality Assurance Cell (IQAC)</h3>
              <p className="text-gray-600 mb-4">
                The IQAC plays a vital role in maintaining and enhancing the quality of our institution. It develops a system for conscious, consistent, and catalytic improvement in the overall performance of the institution.
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">Key Functions:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Development and application of quality benchmarks</li>
                <li>Facilitation of learner-centric environment</li>
                <li>Arrangement for feedback from students, parents, and other stakeholders</li>
                <li>Documentation of various programs and activities</li>
                <li>Organization of workshops, seminars on quality-related themes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Best Practices</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700">Holistic Development Program</h4>
                  <p className="text-gray-600">A comprehensive program focusing on academic excellence, personality development, and social responsibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Green Campus Initiative</h4>
                  <p className="text-gray-600">Promoting environmental consciousness through sustainable practices and awareness campaigns.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Mentorship Program</h4>
                  <p className="text-gray-600">A structured mentoring system where faculty members guide students in academic and personal growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">Industry-Academia Collaboration</h4>
                  <p className="text-gray-600">Regular interaction with industry experts to bridge the gap between theoretical knowledge and practical applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Future Quality Enhancement Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-200 mb-2">01</div>
            <h3 className="text-xl font-bold mb-2">Research Excellence</h3>
            <p className="text-blue-100">Enhancing research infrastructure and promoting interdisciplinary research initiatives.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-200 mb-2">02</div>
            <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
            <p className="text-blue-100">Implementing advanced digital solutions for teaching, learning, and administrative processes.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-200 mb-2">03</div>
            <h3 className="text-xl font-bold mb-2">Global Partnerships</h3>
            <p className="text-blue-100">Establishing collaborations with international universities for student and faculty exchange programs.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-4xl font-bold text-blue-200 mb-2">04</div>
            <h3 className="text-xl font-bold mb-2">Skill Development</h3>
            <p className="text-blue-100">Creating specialized centers for enhancing employability skills and entrepreneurship abilities.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NaacPage; 