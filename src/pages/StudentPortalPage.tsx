import { motion } from 'framer-motion';
import { useState } from 'react';

const StudentPortalPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would validate credentials against a backend
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
    setActiveTab('dashboard');
  };

  // Mock data for student dashboard
  const studentInfo = {
    name: 'Rahul Sharma',
    id: 'ST20230456',
    program: 'Bachelor of Computer Science',
    semester: '5th Semester',
    batch: '2021-2025',
    email: 'rahul.s@college.edu',
    phone: '+91 9876543210',
    attendance: '85%',
    cgpa: '8.7',
  };

  const courses = [
    { code: 'CS501', name: 'Database Management Systems', credits: 4, attendance: '90%', grade: 'A' },
    { code: 'CS502', name: 'Computer Networks', credits: 4, attendance: '82%', grade: 'B+' },
    { code: 'CS503', name: 'Operating Systems', credits: 4, attendance: '88%', grade: 'A-' },
    { code: 'CS504', name: 'Web Development', credits: 3, attendance: '95%', grade: 'A+' },
    { code: 'CS505', name: 'Software Engineering', credits: 3, attendance: '78%', grade: 'B' },
  ];

  const announcements = [
    { id: 1, title: 'Mid-semester Examination Schedule', date: '2024-03-15', content: 'The mid-semester examinations will commence from April 10, 2024. The detailed schedule is available on the examination portal.' },
    { id: 2, title: 'Workshop on AI and Machine Learning', date: '2024-03-10', content: 'A two-day workshop on AI and Machine Learning will be conducted on March 25-26, 2024. Interested students can register at the Computer Science Department.' },
    { id: 3, title: 'Fee Payment Deadline', date: '2024-03-05', content: 'The last date for payment of semester fees without late fee is March 31, 2024. Students are advised to clear their dues before the deadline.' },
    { id: 4, title: 'Campus Placement Drive', date: '2024-03-01', content: 'TechSolutions Inc. will be conducting a campus placement drive for final year students on April 5, 2024. Eligible students should register with the Placement Cell.' },
  ];

  const assignments = [
    { id: 1, course: 'CS501', title: 'Database Normalization Project', deadline: '2024-04-05', status: 'Pending' },
    { id: 2, course: 'CS502', title: 'Network Protocols Implementation', deadline: '2024-03-28', status: 'Submitted' },
    { id: 3, course: 'CS503', title: 'Process Scheduling Algorithms', deadline: '2024-04-10', status: 'Pending' },
    { id: 4, course: 'CS504', title: 'Responsive Web Application', deadline: '2024-03-20', status: 'Graded', grade: 'A' },
    { id: 5, course: 'CS505', title: 'Software Requirements Specification', deadline: '2024-04-15', status: 'Pending' },
  ];

  const renderLoginForm = () => (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Student Login</h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Student ID / Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your student ID"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Sign In
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Need help? Contact <a href="#" className="text-blue-600 hover:underline">IT Support</a>
        </p>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">{studentInfo.name}</h2>
            <p className="text-gray-600">{studentInfo.program} | {studentInfo.semester}</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end">
            <p className="text-gray-600">Student ID: <span className="font-semibold">{studentInfo.id}</span></p>
            <p className="text-gray-600">Batch: <span className="font-semibold">{studentInfo.batch}</span></p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Overall CGPA</p>
            <p className="text-2xl font-bold text-blue-700">{studentInfo.cgpa}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Attendance</p>
            <p className="text-2xl font-bold text-blue-700">{studentInfo.attendance}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Current Courses</p>
            <p className="text-2xl font-bold text-blue-700">{courses.length}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Pending Assignments</p>
            <p className="text-2xl font-bold text-blue-700">{assignments.filter(a => a.status === 'Pending').length}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Recent Announcements</h3>
        <div className="space-y-4">
          {announcements.slice(0, 3).map(announcement => (
            <div key={announcement.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-gray-800">{announcement.title}</h4>
                <span className="text-sm text-gray-500">{announcement.date}</span>
              </div>
              <p className="text-gray-600 mt-1">{announcement.content.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button 
            onClick={() => setActiveTab('announcements')}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Announcements
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Upcoming Assignments</h3>
          <div className="space-y-3">
            {assignments.filter(a => a.status === 'Pending').slice(0, 3).map(assignment => (
              <div key={assignment.id} className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div>
                  <p className="font-medium text-gray-800">{assignment.title}</p>
                  <p className="text-sm text-gray-500">{assignment.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">Due: {assignment.deadline}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <button 
              onClick={() => setActiveTab('assignments')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Assignments
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Course Performance</h3>
          <div className="space-y-3">
            {courses.slice(0, 3).map(course => (
              <div key={course.code} className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div>
                  <p className="font-medium text-gray-800">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.code} | {course.credits} Credits</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-700">{course.grade}</p>
                  <p className="text-sm text-gray-500">Attendance: {course.attendance}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <button 
              onClick={() => setActiveTab('courses')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Current Courses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map(course => (
              <tr key={course.code}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.credits}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.attendance}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAnnouncements = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Announcements</h2>
      <div className="space-y-6">
        {announcements.map(announcement => (
          <div key={announcement.id} className="border-l-4 border-blue-500 pl-4 py-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg text-gray-800">{announcement.title}</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{announcement.date}</span>
            </div>
            <p className="text-gray-600 mt-2">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Assignments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assignments.map(assignment => (
              <tr key={assignment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.course}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.deadline}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      assignment.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {assignment.status === 'Pending' ? (
                    <button className="text-blue-600 hover:text-blue-800">Submit</button>
                  ) : assignment.status === 'Submitted' ? (
                    <button className="text-gray-600">View</button>
                  ) : (
                    <span className="text-green-600">Grade: {assignment.grade}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Student Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-700">{studentInfo.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{studentInfo.name}</h3>
            <p className="text-gray-600">{studentInfo.id}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition text-sm">
              Change Photo
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{studentInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Student ID</p>
                  <p className="font-medium">{studentInfo.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{studentInfo.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{studentInfo.phone}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="font-medium">{studentInfo.program}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Semester</p>
                  <p className="font-medium">{studentInfo.semester}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Batch</p>
                  <p className="font-medium">{studentInfo.batch}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">CGPA</p>
                  <p className="font-medium">{studentInfo.cgpa}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                Edit Profile
              </button>
              <button className="ml-4 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md transition">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortalContent = () => {
    if (!isLoggedIn) {
      return renderLoginForm();
    }

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-2 px-3 rounded-md transition ${
                  activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`py-2 px-3 rounded-md transition ${
                  activeTab === 'courses' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`py-2 px-3 rounded-md transition ${
                  activeTab === 'assignments' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Assignments
              </button>
              <button
                onClick={() => setActiveTab('announcements')}
                className={`py-2 px-3 rounded-md transition ${
                  activeTab === 'announcements' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Announcements
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-2 px-3 rounded-md transition ${
                  activeTab === 'profile' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Profile
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'assignments' && renderAssignments()}
        {activeTab === 'announcements' && renderAnnouncements()}
        {activeTab === 'profile' && renderProfile()}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Student Portal</h1>
        {!isLoggedIn && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your academic information, course materials, assignments, and more through our secure student portal.
          </p>
        )}
      </div>

      {renderPortalContent()}
    </motion.div>
  );
};

export default StudentPortalPage; 