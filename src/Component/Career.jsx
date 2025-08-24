import React from "react";

function Career() {
  const roles = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "Create stunning user interfaces and engaging web experiences using modern technologies like React, Vue, or Angular.",
      skills: [
        "Basic HTML, CSS, JavaScript",
        "Responsive Design Basics",
        "Introduction to React",
        "Basic UI/UX Understanding",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_FRONTEND_FORM_ID/viewform",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Backend Developer",
      description:
        "Build robust server-side applications, APIs, and database systems that power our digital solutions.",
      skills: [
        "Basic Node.js",
        "Understanding of Databases",
        "Simple API Development",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_BACKEND_FORM_ID/viewform",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description:
        "Master both frontend and backend technologies to create complete end-to-end web applications.",
      skills: [
        "Basic Frontend & Backend Knowledge",
        "Simple Database Usage",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_FULLSTACK_FORM_ID/viewform",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Video Editor",
      description:
        "Create compelling visual content, promotional videos, and multimedia presentations for our events and campaigns.",
      skills: [
        "Basic Video Editing Tools",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_VIDEO_EDITOR_FORM_ID/viewform",
      color: "from-red-500 to-orange-600",
    },
    {
      id: 5,
      title: "Designer",
      description:
        "Design beautiful graphics, logos, posters, and visual assets that represent our chapter's brand and identity.",
      skills: [
        "Basic Graphic Design Knowledge",
        "Intro to Figma/Canva",
        "Simple Logo & Poster Design",
        "Understanding Color & Fonts",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v4M9 3v4m0 0h10m-10 0l10 4m0 0v4a2 2 0 01-2 2H9m10-6L9 17"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_DESIGNER_FORM_ID/viewform",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 6,
      title: "Social Media Manager",
      description:
        "Drive our online presence, create engaging content, and build our community across various social media platforms.",
      skills: [
        "Content Strategy",
        "Social Media Analytics",
        "Community Management",
        "Digital Marketing",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_SOCIAL_MEDIA_FORM_ID/viewform", // Replace with actual form URL
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      title: "Events Coordinator",
      description:
        "Plan, organize, and execute engaging events, workshops, and activities that bring our community together.",
      skills: [
        "Event Planning",
        "Project Management",
        "Vendor Coordination",
        "Budget Management",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      formUrl: "https://docs.google.com/forms/d/e/YOUR_EVENTS_FORM_ID/viewform", // Replace with actual form URL
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 8,
      title: "Technical Deputy Lead",
      description:
        "Support technical initiatives, mentor team members, and help drive our technical vision and projects forward.",
      skills: [
        "Technical Leadership",
        "Mentoring",
        "Project Management",
        "Full Stack Knowledge",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_TECH_DEPUTY_FORM_ID/viewform", // Replace with actual form URL
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 9,
      title: "Social Media Co-lead",
      description:
        "Work alongside our Social Media Manager to amplify our digital presence and engage with our growing community.",
      skills: [
        "Content Creation",
        "Social Media Strategy",
        "Community Engagement",
        "Brand Voice",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      formUrl:
        "https://docs.google.com/forms/d/e/YOUR_SOCIAL_COLEAD_FORM_ID/viewform", // Replace with actual form URL
      color: "from-violet-500 to-purple-600",
    },
  ];

  const handleApplyClick = (formUrl, title) => {
    // Open Google Form in new tab
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join Our <span className="text-yellow-300">NPRCET ACM <br />Student Chapter</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Shape the future of technology and innovation with us. Find your
              perfect role and start your journey today.
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Remote Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flexible Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Learning Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </div>

      {/* Roles Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Available Positions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting opportunities to contribute, learn, and grow with
            our dynamic team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${role.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <div className="transform rotate-12 scale-150">
                    {role.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="mb-4 text-white">{role.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {role.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => handleApplyClick(role.formUrl, role.title)}
                  className={`w-full bg-gradient-to-r ${role.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:animate-pulse`}
                >
                  <span>Apply Now</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see a role that fits? We're always looking for passionate
            individuals who want to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="nprcetacm@nprcolleges.org" // Replace with actual email
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/YOUR_GENERAL_INQUIRY_FORM_ID/viewform" // Replace with actual form URL
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>General Application</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 py-8 text-center text-gray-600">
        <p className="text-sm">
          Applications are reviewed on a rolling basis. We'll get back to you
          within 24hrs.
        </p>
      </div>
    </div>
  );
}

export default Career;
