import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";

import Lightning from "../../Reactbits/Lightning/Lightning";
import LetterGlitch from "../../Reactbits/LetterGlitch/LetterGlitch";
import LightRays from "../../Reactbits/LightRays/LightRays";

import Particles from "../../Reactbits/Particles/Particles";
import Hyperspeed from "../../Reactbits/Hyperspeed/Hyperspeed";

import GradientText from "../../Reactbits/GradientText/GradientText";
import TextType from "../../Reactbits/TextType/TextType";
import Lanyard from "../../Reactbits/Lanyard/Lanyard";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, data visualization, and responsive design for all devices.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with smooth animations, interactive components, and optimized performance.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "MySql",
    "PostgreSQL",
    "Laravel",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "Firebase",
  ];

  return (
    <div className="min-h-screen text-white poppins-medium">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              .Dott
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 cursor-po">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 cursor-pointer hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize text-gray-300 hover:text-blue-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 "
      >
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        {/* Background Lightning */}
        <div className="absolute inset-0 -z-10 bg-black">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-10">
            {/* <span className="bg-gradient-to-r from-white via-purple-500 to-white bg-clip-text text-transparent">
              I Gede Juwa Mardood
            </span> */}
            <TextType
              text={[
                "I Gede Juwa Mardood",
                "Code it. Break it. Fix it. Repeat.",
              ]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Lightning */}
        <div className="absolute inset-0 -z-10 bg-black">
          {/* <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} /> */}
          <Particles
            particleColors={["#ffff", "#fff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                <User className="inline mr-2" size={24} />
                Personal Info
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="mr-3 text-blue-400" size={18} />
                  <span>Age: 23 years old</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 text-blue-400" size={18} />
                  <span>Location: Denpasar, Bali, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-3 text-blue-400" size={18} />
                  <span>Role: Software Engineer</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="mr-3 text-blue-400" size={18} />
                  <span>Graduate of : INSTIKI</span>
                </div>
              </div>

              <p className="text-gray-300 mt-6 leading-relaxed">
                I'm a passionate software engineer with a strong foundation in
                modern web technologies. I love solving complex problems and
                creating user-friendly applications that make a difference.
                Always eager to learn new technologies and improve my skills.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                <Code className="inline mr-2" size={24} />
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-700 transition-colors duration-200 border border-gray-700 hover:border-blue-400"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10 bg-black">
          <Particles
            particleColors={["#ffffff", "#fff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 
                     hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect and create something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:juwamardood@gmail.com"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-400"
              >
                <Mail className="text-blue-400" size={24} />
                <span>juwamardood@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/juwamardott"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-400"
              >
                <Linkedin className="text-blue-400" size={24} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/juwamardott"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-400"
              >
                <Github className="text-blue-400" size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 I Gede Juwa Mardood. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
