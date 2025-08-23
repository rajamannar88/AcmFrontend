import React, { useState } from 'react';
import { Search, ExternalLink, Code, Zap, Trophy, Wrench, BookOpen, Filter, Star } from 'lucide-react';

const technologyPlaygroundData = [
  {
    section: "Roadmaps",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-purple-600",
    resources: [
      { name: "Frontend Developer Roadmap", url: "https://roadmap.sh/frontend", category: "Frontend" },
      { name: "Backend Roadmap", url: "https://roadmap.sh/backend", category: "Backend" },
      { name: "AI/ML Roadmap", url: "https://roadmap.sh/ai-data-scientist", category: "AI/ML" },
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn", category: "Data Science" },
      { name: "Cyber Security Roadmap", url: "https://roadmap.sh/cyber-security", category: "Security" },
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops", category: "DevOps" },
      { name: "AWS Educate Free", url: "https://aws.amazon.com/education/awseducate/", category: "Cloud" },
      { name: "Data Engineer Roadmap", url: "https://roadmap.sh/data-engineer", category: "Data Engineering" },
      { name: "Analytics Vidhya Free Courses", url: "https://www.analyticsvidhya.com/courses/", category: "Analytics" },
      { name: "Android Roadmap", url: "https://roadmap.sh/android", category: "Mobile" },
      { name: "Flutter Docs", url: "https://docs.flutter.dev/", category: "Mobile" },
      { name: "CS50 Harvard Free", url: "https://cs50.harvard.edu/x/", category: "Computer Science" },
      { name: "Striver A2Z DSA", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", category: "Algorithms" },
    ],
  },
  {
    section: "Hackathons ",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-red-600",
    resources: [
      { name: "Reskilll AllHacks", url: "https://reskilll.com/allhacks", category: "Global" },
      { name: "Devpost", url: "https://devpost.com/hackathons", category: "Global" },
      { name: "Hackathon.com", url: "https://www.hackathon.com/city", category: "India" },
      { name: "MLH", url: "https://mlh.io/", category: "Student" },
      { name: "Unstop", url: "https://unstop.com/competitions", category: "India" },
    ],
  },
  {
    section: "Upcoming Coding Contests",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-green-500 to-teal-600",
    resources: [
      { name: "Clist.by", url: "https://clist.by/", category: "Calendar" },
      { name: "Codeforces Contests", url: "https://codeforces.com/contests", category: "Competitive" },
      { name: "LeetCode Weekly Contest", url: "https://leetcode.com/contest/", category: "Weekly" },
      { name: "AtCoder Contests", url: "https://atcoder.jp/contests", category: "Competitive" },
      { name: "GeeksforGeeks Contests ", url: "https://www.geeksforgeeks.org/blogs/contests/", category: "Practice" },
    ],
  },
  {
    section: "Hands-on Learning",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600",
    resources: [
      { name: "LeetCode", url: "https://leetcode.com", category: "Coding Practice" },
      { name: "GeeksforGeeks Practice", url: "https://practice.geeksforgeeks.org", category: "Coding Practice" },
      { name: "HackerRank", url: "https://www.hackerrank.com/", category: "Programming" },
      { name: "Exercism.io", url: "https://exercism.org/", category: "Code Mentoring" },
      { name: "Google Colab", url: "https://colab.research.google.com/", category: "Notebooks" },
      { name: "Kaggle Notebooks", url: "https://www.kaggle.com/", category: "Data Science" },
      { name: "fast.ai Free ML Course", url: "https://course.fast.ai/", category: "Machine Learning" },
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", category: "Computer Science" },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io/challenges", category: "Frontend" },
      { name: "CodeSandbox", url: "https://codesandbox.io/", category: "Online IDE" },
      { name: "TryHackMe", url: "https://tryhackme.com/", category: "Cybersecurity" },
      { name: "HackTheBox Community Labs", url: "https://www.hackthebox.com/", category: "Penetration Testing" },
      { name: "Play with Docker", url: "https://labs.play-with-docker.com/", category: "Containerization" },
      { name: "AWS Skill Builder Free", url: "https://skillbuilder.aws/", category: "Cloud Learning" },
    ],
  },
  {
    section: "Multi-Department Learning ",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-600",
    resources: [
      // CSE/IT
      { name: "CS50 Harvard Free", url: "https://cs50.harvard.edu/x/", category: "Computer Science" },
      { name: "Striver A2Z DSA", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2", category: "Algorithms" },
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", category: "Programming" },
      // ECE
      { name: "Tinkercad Circuits", url: "https://www.tinkercad.com/circuits", category: "Electronics" },
      { name: "EDA Playground", url: "https://www.edaplayground.com/", category: "VLSI Design" },
      { name: "All About Circuits Labs", url: "https://www.allaboutcircuits.com/", category: "Circuit Design" },
      // EEE
      { name: "LTspice", url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html", category: "Power Electronics" },
      { name: "Scilab Xcos", url: "https://www.scilab.org/software/scilab", category: "Power Electronics" },
      { name: "KiCad Simulation", url: "https://kicad.org/", category: "Power Electronics" },
      { name: "PSIM Student Edition (Free Academic)", url: "https://web.altair.com/academic-hub-psim", category: "Power Electronics" },


      // Mechanical
      { name: "Onshape Free Education", url: "https://www.onshape.com/en/education", category: "CAD Design" },
      { name: "Autodesk Fusion 360 Free", url: "https://www.autodesk.com/in/products/fusion-360/personal", category: "3D Modeling" },
      { name: "SimScale Free Plan", url: "https://www.simscale.com/", category: "Simulation" },
      // Civil
      { name: "AutoCAD Free Student Version", url: "https://www.autodesk.com/education/edu-software/autocad", category: "Civil Design" },
      { name: "Bentley STAAD Pro Education", url: "https://education.bentley.com/", category: "Structural Analysis" },
      { name: "NPTEL-Introduction to Civil Engineering Profession", url: "https://nptel.ac.in/courses/105106201", category: "Civil Engineering" },
      // MBA/Management
      { name: "IIMBx Free on edX", url: "https://www.edx.org/school/iimbx", category: "Business" },
      { name: "Coursera Free Management Courses", url: "https://www.coursera.org/courses?query=management&price=free", category: "Management" },
    ],
  },
];

const TechnologyPlayground = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  // Get all unique categories
  const allCategories = ['All', ...new Set(
    technologyPlaygroundData.flatMap(section => 
      section.resources.map(resource => resource.category)
    )
  )];

  // Filter resources based on search and category
  const getFilteredResources = (resources) => {
    return resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const toggleFavorite = (resourceName) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(resourceName)) {
      newFavorites.delete(resourceName);
    } else {
      newFavorites.add(resourceName);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg overflow-visible " >
        <div className="max-w-7xl mx-auto px-12 py-8">
<div className="text-center mb-8">
<h1 className="inline-block text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1">
  Technology Playground
</h1>

  <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
    Your comprehensive hub for learning resources, coding contests, hackathons, and hands-on practice across all technology domains.
  </p>
</div>


          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-48"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-12">
          {technologyPlaygroundData.map((section, idx) => {
            const filteredResources = getFilteredResources(section.resources);
            
            if (filteredResources.length === 0 && (searchTerm || selectedCategory !== 'All')) {
              return null;
            }

            return (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} p-6`}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{section.section}</h2>
                      <p className="text-white text-opacity-90">
                        {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resources Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResources.map((resource, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:scale-105 transform transition-all duration-300 hover:border-blue-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {resource.name}
                            </h3>
                            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full mt-2">
                              {resource.category}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(resource.name);
                            }}
                            className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                          >
                            <Star 
                              className={`w-4 h-4 ${
                                favorites.has(resource.name) 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-400 hover:text-yellow-400'
                              }`} 
                            />
                          </button>
                        </div>
                        
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-end justify-end p-4"
                        >
                          <div className="bg-blue-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  
                  {filteredResources.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No resources found matching your criteria.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            Explore, learn, and grow with these carefully curated technology resources.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {favorites.size > 0 && `You have ${favorites.size} favorite resources saved.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPlayground;