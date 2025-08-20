import React, { useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';
import PriImg from '../Team-Assets/prof-pics/new-princ.png'
import gopi from '../Team-Assets/prof-photos/Gopisir.jpg'
import img5 from '../Team-Assets/prof-pics/5.png'
import img4 from '../Team-Assets/prof-pics/4.png'
import img7 from '../Team-Assets/prof-pics/7.png'
import img6 from '../Team-Assets/prof-pics/6.png'
import stud1 from '../Team-Assets/stud-photos/Aswanth.jpg'
import stud2 from '../Team-Assets/stud-photos/AASHIQ RASOOLSATHAKATHULLAHS.jpg'
import stud3 from '../Team-Assets/stud-photos/MalleshT.jpg'
import stud4 from '../Team-Assets/stud-photos/rajamannar.jpg'
import stud5 from '../Team-Assets/stud-photos/krithick.jpg'
import stud6 from '../Team-Assets/stud-photos/afsal.jpg'
import stud7 from '../Team-Assets/stud-photos/GANESH PRIYAN.jpg'
import stud8 from '../Team-Assets/stud-photos/Mohammed hanif H.jpg'
import stud9 from '../Team-Assets/stud-photos/Sakthi vignesh S.jpg'
import stud10 from '../Team-Assets/stud-photos/Joseph boweenraj A.jpg'
import stud11 from '../Team-Assets/stud-photos/Naveen J.jpg'
import stud12 from '../Team-Assets/stud-photos/Jenifer R.jpg'
import stud13 from '../Team-Assets/stud-photos/1st-yr/Kavin. S.jpg'
import stud14 from '../Team-Assets/stud-photos/1st-yr/Arjunkumar. S.jpg'
import stud15 from '../Team-Assets/stud-photos/1st-yr/Prem Dass. M. D.jpg'
import stud16 from '../Team-Assets/stud-photos/1st-yr/Sivaranjani. S.jpg'
import stud17 from '../Team-Assets/stud-photos/1st-yr/Vidhya. S.jpg'
import stud18 from '../Team-Assets/stud-photos/1st-yr/Deepika. M.jpg'
import stud19 from '../Team-Assets/stud-photos/1st-yr/Abirami. S.jpg'
import stud20 from '../Team-Assets/stud-photos/1st-yr/Dharshana. G.jpg'

const Team = () => {
  const particlesRef = useRef(null);

  const professionalMembers = [
    {
      name: "Dr M Karthigai Pandian",
      role: "Faculty Advisor",
      image: `${PriImg}`,
      linkedin: "https://www.linkedin.com/in/dr-m-karthigai-pandian-a9321020/"
    },
    {
      name: "Dr A Gopi Saminathan",
      role: "Technical Mentor",
      image: `${gopi}`,
      linkedin: "#"
    },
    {
      name: "Mr K Aruna Senthil Kumar",
      role: "Community Engagement Officer",
      image: `${img5}`,
      linkedin: "#"
    },
    {
      name: "Dr A Srinivasan",
      role: "Research Coordinator",
      image: `${img4}`,
      linkedin: "#"
    },
    {
      name: "Mr V Virumapandi",
      role: "Career Development Advisor(Faculty Sponsor)",
      image: `${img7}`,
      linkedin: "https://www.linkedin.com/in/mr-v-virumapandi-518491263/"
    },
    {
      name: "Mr G Sundararajan",
      role: "Industry Liaison",
      image: `${img6}`,
      linkedin: "#"
    }
  ];

  const students = [
    {
      name: "Mr S Aswanthwin Fried",
      role: "President",
      image:`${stud1}`,
      linkedin: "https://www.linkedin.com/in/aswanthwin-fried-s-895480218/",
      github: "https://github.com/aswanthwinfried"
    },
    {
      name: "Mr S Aashiq Rasool",
      role: "Vice President",
      image: `${stud2}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr T Mallesh",
      role: "Secretary",
      image: `${stud3}`,
      linkedin: "https://www.linkedin.com/in/mallesh-t-365217257/",
      github: "#"
    },
    {
      name: "Mr N G Rajamannar",
      role: "Treasurer",
      image: `${stud4}`,
      linkedin: "https://www.linkedin.com/in/rajamannar-ng-752033218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/rajamannar88"
    },
    {
      name: "Mr P Krithick",
      role: "Technical Chair",
      image: `${stud5}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr M Afzal Khan",
      role: "Membership Chair",
      image: `${stud6}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr B S GaneshPriyan",
      role: "Webmaster",
      image: `${stud7}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr H Mohammed Hanif",
      role: "Research & Development Lead",
      image: `${stud8}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr S Sakthi Vignesh",
      role: "Social Media Manager",
      image: `${stud9}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr A Joseph Boweenraj",
      role: "Mic And Host Coordinator",
      image: `${stud10}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr J Naveen",
      role: "Events Deputy Coordinator",
      image: `${stud11}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms R Jenifer",
      role: "Events Coordinator",
      image: `${stud12}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr S Kavin",
      role: "Technical Innovation Coordinator",
      image: `${stud13}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr S Arjun Kumar",
      role: "Alumni Liaison",
      image: `${stud14}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mr M D Prem Dass",
      role: "Diversity and Inclusion Office",
      image: `${stud15}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms S Sivaranjani",
      role: "Public Relations Lead",
      image: `${stud16}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms S Vidhya",
      role: "Technical Deputy Lead",
      image: `${stud17}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms M Deepika",
      role: "Events Deputy Coordinator",
      image: `${stud18}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms S Abirami",
      role: "Poster And Video Editing Lead",
      image: `${stud19}`,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ms G Dharsana",
      role: "Social Media Co-lead",
      image: `${stud20}`,
      linkedin: "#",
      github: "#"
    }
  ];

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = ['#000000', '#0000ff', '#ff0000', '#00ff00'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      ctx.strokeStyle = 'rgba(170, 170, 170, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const TeamMember = ({ member, showGithub = false }) => (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
      <div className="relative mx-auto w-40 h-40 mb-6">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-800 group-hover:border-blue-500 transition-colors duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/160x160?text=No+Image';
            }}
          />
        </div>

        {/* Social Media Overlay (instant show/hide, no fade animation) */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            {member.linkedin && member.linkedin !== "#" && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            )}
            {showGithub && member.github && member.github !== "#" && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full transform hover:scale-110"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
          {member.name}
        </h3>
        <p className="text-blue-600 font-medium text-sm">
          {member.role}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={particlesRef}
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      />
      
      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-4 tracking-tight">
            MEET OUR TEAM
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        {/* Professional Members Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Professional Members
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {professionalMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto mb-20">
          <hr className="border-2 border-blue-200" />
        </div>

        {/* Students Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Students
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {students.map((student, index) => (
              <TeamMember key={index} member={student} showGithub={true} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg">
            Together, we're building the future of technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
