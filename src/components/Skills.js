import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaVue, 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaCode, 
  FaShieldAlt,
  FaGithub,
  FaGitAlt
} from 'react-icons/fa';
import { SiMysql, SiAndroidstudio, SiNetbeans } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Java", icon: <FaJava />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 80 },
        { name: "JavaScript", icon: <FaJs />, level: 75 },
        { name: "Go", icon: <FaCode />, level: 60 },
        { name: "SQL", icon: <FaDatabase />, level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: <FaHtml5 />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "React", icon: <FaReact />, level: 70 },
        { name: "Vue.js", icon: <FaVue />, level: 65 },
        { name: "JavaScript", icon: <FaJs />, level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 80 },
        { name: "GitHub", icon: <FaGithub />, level: 85 },
        { name: "Git", icon: <FaGitAlt />, level: 75 },
        { name: "VS Code", icon: <FaCode />, level: 90 },
        { name: "NetBeans", icon: <SiNetbeans />, level: 70 }
      ]
    },
    {
      title: "Mobile & Security",
      icon: <FaMobile />,
      skills: [
        { name: "Android Studio", icon: <SiAndroidstudio />, level: 65 },
        { name: "Mobile Development", icon: <FaMobile />, level: 60 },
        { name: "Information Security", icon: <FaShieldAlt />, level: 70 },
        { name: "Data Protection", icon: <FaShieldAlt />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Development Approach</h3>
            <p>
              I believe that programming languages are just tools for problem-solving. 
              My approach focuses on understanding the core concepts and adapting quickly 
              to new technologies. I'm comfortable with Agile methodologies and the Software 
              Development Life Cycle (SDLC).
            </p>
          </div>
          
          <div className="summary-card">
            <h3>Learning Philosophy</h3>
            <p>
              I've learned that the ability to read, learn, and debug in any language 
              is a core skill of a good developer. I'm always eager to expand my knowledge 
              and tackle new challenges in unfamiliar technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
