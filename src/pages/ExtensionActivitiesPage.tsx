import { motion } from 'framer-motion';
import { useState } from 'react';

const ExtensionActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState('nss');

  const activities = {
    nss: {
      title: "National Service Scheme (NSS)",
      description: "The NSS unit of our college aims to develop the personality of students through community service. It provides diverse opportunities for students to work in rural areas, adopted villages, and schools.",
      activities: [
        {
          title: "Blood Donation Camp",
          date: "September 15, 2023",
          description: "Annual blood donation camp organized in collaboration with the Red Cross Society. Over 200 units of blood were collected.",
          image: "https://via.placeholder.com/600x400?text=Blood+Donation+Camp"
        },
        {
          title: "Tree Plantation Drive",
          date: "July 5, 2023",
          description: "As part of the environmental awareness program, 500 saplings were planted in and around the campus.",
          image: "https://via.placeholder.com/600x400?text=Tree+Plantation"
        },
        {
          title: "Rural Health Awareness Camp",
          date: "November 20, 2023",
          description: "Health awareness camp conducted in the adopted village focusing on preventive healthcare and hygiene practices.",
          image: "https://via.placeholder.com/600x400?text=Health+Camp"
        },
        {
          title: "Swachh Bharat Abhiyan",
          date: "October 2, 2023",
          description: "Cleanliness drive conducted in the nearby community areas to promote the importance of cleanliness and hygiene.",
          image: "https://via.placeholder.com/600x400?text=Swachh+Bharat"
        }
      ]
    },
    ncc: {
      title: "National Cadet Corps (NCC)",
      description: "The NCC unit of our college aims to develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure, and ideals of selfless service among the youth of our country.",
      activities: [
        {
          title: "Annual Training Camp",
          date: "December 10-24, 2023",
          description: "Two-week rigorous training camp focusing on drill, weapon training, map reading, and field craft.",
          image: "https://via.placeholder.com/600x400?text=NCC+Camp"
        },
        {
          title: "Republic Day Parade",
          date: "January 26, 2024",
          description: "Selected cadets participated in the Republic Day parade at the state level representing our college.",
          image: "https://via.placeholder.com/600x400?text=Republic+Day+Parade"
        },
        {
          title: "Adventure Trekking Expedition",
          date: "October 5-10, 2023",
          description: "Trekking expedition to develop team spirit, leadership qualities, and physical endurance among cadets.",
          image: "https://via.placeholder.com/600x400?text=Trekking+Expedition"
        },
        {
          title: "Disaster Management Training",
          date: "August 18-20, 2023",
          description: "Special training program on disaster management techniques and rescue operations.",
          image: "https://via.placeholder.com/600x400?text=Disaster+Management"
        }
      ]
    },
    outreach: {
      title: "Community Outreach Programs",
      description: "Our college is committed to serving the community through various outreach programs that address social issues and contribute to the welfare of society.",
      activities: [
        {
          title: "Digital Literacy Program",
          date: "Ongoing (Every Saturday)",
          description: "Teaching basic computer skills to underprivileged children and adults from nearby communities.",
          image: "https://via.placeholder.com/600x400?text=Digital+Literacy"
        },
        {
          title: "Free Legal Aid Camp",
          date: "February 12, 2024",
          description: "Legal awareness and free consultation camp organized in collaboration with the District Legal Services Authority.",
          image: "https://via.placeholder.com/600x400?text=Legal+Aid"
        },
        {
          title: "Women Empowerment Workshop",
          date: "March 8, 2024",
          description: "Workshop on women's rights, health, and entrepreneurship opportunities for women from rural areas.",
          image: "https://via.placeholder.com/600x400?text=Women+Empowerment"
        },
        {
          title: "Orphanage Visit",
          date: "December 25, 2023",
          description: "Students visited local orphanages to spend time with children and donate essential items.",
          image: "https://via.placeholder.com/600x400?text=Orphanage+Visit"
        }
      ]
    },
    environment: {
      title: "Environmental Initiatives",
      description: "Our college is dedicated to promoting environmental consciousness and sustainability through various green initiatives and awareness programs.",
      activities: [
        {
          title: "Plastic-Free Campus Campaign",
          date: "Ongoing",
          description: "Initiative to make the campus plastic-free by promoting alternatives to single-use plastics.",
          image: "https://via.placeholder.com/600x400?text=Plastic+Free+Campus"
        },
        {
          title: "E-Waste Collection Drive",
          date: "April 22, 2023",
          description: "Collection and proper disposal of electronic waste from the campus and surrounding areas.",
          image: "https://via.placeholder.com/600x400?text=E-Waste+Drive"
        },
        {
          title: "Water Conservation Project",
          date: "Ongoing",
          description: "Implementation of rainwater harvesting systems and water conservation awareness programs.",
          image: "https://via.placeholder.com/600x400?text=Water+Conservation"
        },
        {
          title: "Biodiversity Documentation",
          date: "July-August 2023",
          description: "Documentation of plant and animal species in and around the campus to promote biodiversity conservation.",
          image: "https://via.placeholder.com/600x400?text=Biodiversity"
        }
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Extension Activities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our college is committed to social responsibility and community engagement through various extension activities that benefit society and enrich the learning experience of our students.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap border-b border-gray-200">
          {Object.keys(activities).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 font-medium text-lg transition-colors duration-200 ${
                activeTab === key
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {activities[key as keyof typeof activities].title}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{activities[activeTab as keyof typeof activities].title}</h2>
          <p className="text-gray-600 text-lg">{activities[activeTab as keyof typeof activities].description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities[activeTab as keyof typeof activities].activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-blue-700">{activity.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{activity.date}</span>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Impact of Our Extension Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <p className="text-gray-700">Beneficiaries Reached</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
            <p className="text-gray-700">Community Partners</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-700">Activities Conducted</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1500+</div>
            <p className="text-gray-700">Student Volunteers</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Get Involved</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">For Students</h3>
              <p className="text-gray-600 mb-4">
                As a student, you can actively participate in various extension activities and contribute to social causes while developing valuable skills and experiences.
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">How to Join:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Contact the respective program coordinators</li>
                <li>Fill out the registration form available at the Student Affairs Office</li>
                <li>Attend orientation sessions for new volunteers</li>
                <li>Participate in regular meetings and planning sessions</li>
              </ul>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                Register as Volunteer
              </button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">For Organizations</h3>
              <p className="text-gray-600 mb-4">
                We welcome collaborations with NGOs, government agencies, and other organizations to expand our reach and create meaningful impact in the community.
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">Collaboration Opportunities:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Joint community service projects</li>
                <li>Resource sharing for social initiatives</li>
                <li>Expertise exchange and capacity building</li>
                <li>Research collaborations on social issues</li>
              </ul>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-sm font-semibold text-blue-200 mb-2">June 5, 2024</div>
            <h3 className="text-xl font-bold mb-2">World Environment Day</h3>
            <p className="text-blue-100 mb-4">Mass tree plantation drive and environmental awareness workshop.</p>
            <button className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition">
              Learn More
            </button>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-sm font-semibold text-blue-200 mb-2">July 15-20, 2024</div>
            <h3 className="text-xl font-bold mb-2">Rural Immersion Program</h3>
            <p className="text-blue-100 mb-4">One-week immersion program in adopted villages for holistic rural development.</p>
            <button className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition">
              Learn More
            </button>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="text-sm font-semibold text-blue-200 mb-2">August 12, 2024</div>
            <h3 className="text-xl font-bold mb-2">Youth Empowerment Summit</h3>
            <p className="text-blue-100 mb-4">Conference focusing on youth leadership and community service.</p>
            <button className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExtensionActivitiesPage; 