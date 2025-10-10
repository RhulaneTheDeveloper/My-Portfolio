import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaUsers } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Community Infrastructure Reporting System (CIRS)",
      description: "A comprehensive web-based system enabling citizens to report community infrastructure issues such as damaged roads, broken streetlights, or unsafe public spaces.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Upload images and descriptions of incidents",
        "Automatic location extraction from images",
        "Database integration with stored procedures",
        "Responsive design for desktop and mobile",
        "Team collaboration through Microsoft Teams"
      ],
      liveUrl: "https://rhulane.pythonanywhere.com/",
      githubUrl: "https://github.com/RhulaneBaloyi",
      role: "Full-stack Developer",
      duration: "4-6 months (Final Year Project)",
      lessons: [
        "Programming languages are tools for problem-solving",
        "Quick adaptation to new technologies",
        "Enhanced debugging and troubleshooting skills",
        "Teamwork and collaboration",
        "Adaptability in fast-paced environments"
      ]
    }
  ];

  const upcomingProjects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and modern web technologies",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
      status: "In Progress"
    },
    {
      title: "Mobile App Development",
      description: "Android application using Android Studio",
      technologies: ["Java", "Android Studio", "XML"],
      status: "Planned"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my development work and learning journey</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-role">{project.role}</span>
                    <span className="project-duration">{project.duration}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-lessons">
                  <h4>What I Learned:</h4>
                  <ul>
                    {project.lessons.map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="upcoming-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Upcoming Projects</h3>
          <div className="upcoming-grid">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                className="upcoming-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="upcoming-header">
                  <h4>{project.title}</h4>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="upcoming-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
