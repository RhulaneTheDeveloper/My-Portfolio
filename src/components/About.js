import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="about-intro">
              <h3>Hello! I'm Rhulane Baloyi</h3>
              <p>
                I'm a passionate Computer Science student at Tshwane University of Technology, 
                currently pursuing my Diploma with an expected graduation in June 2025. 
                Originally from Limpopo, Mokopane, Ga-Monene, I've always been fascinated 
                by technology and its potential to solve real-world problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-education">
              <h4><FaGraduationCap /> Education</h4>
              <div className="education-item">
                <h5>Tshwane University of Technology</h5>
                <p>Diploma in Computer Science</p>
                <span className="education-period">June 2025 - Present</span>
                <span className="education-location">Pretoria Soshanguve Campus</span>
              </div>
              <div className="education-item">
                <h5>Siyakheleni Secondary School</h5>
                <p>Matriculated</p>
                <span className="education-period">2020</span>
                <span className="education-location">Limpopo, Mokopane, Ga-Monene</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-goals">
              <h4><FaUser /> Current Goals</h4>
              <p>
                I'm currently seeking an internship or Work Integrated Learning (WIL) opportunity 
                as a requirement for graduation. I'm eager to learn, gain practical experience, 
                and contribute meaningfully to a professional environment while continuing to 
                grow my skills.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaGraduationCap />
                </div>
                <div className="stat-content">
                  <h3>Diploma</h3>
                  <p>Computer Science</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="stat-content">
                  <h3>Location</h3>
                  <p>Kempton Park, Gauteng</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-content">
                  <h3>Graduation</h3>
                  <p>June 2025</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <FaUser />
                </div>
                <div className="stat-content">
                  <h3>Status</h3>
                  <p>Seeking Internship</p>
                </div>
              </div>
            </div>

            <div className="about-highlights">
              <h4>Key Highlights</h4>
              <ul>
                <li>Strong foundation in multiple programming languages</li>
                <li>Experience with web development technologies</li>
                <li>Database management and SQL expertise</li>
                <li>Mobile development with Android Studio</li>
                <li>Understanding of software development methodologies</li>
                <li>Information security awareness</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
