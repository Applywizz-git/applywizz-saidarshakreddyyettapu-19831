// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import { Briefcase } from 'lucide-react';

// const Experience = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const experience = {
//     title: 'Cybersecurity Analyst',
//     company: 'Galaxy Enterprises',
//     period: 'January 2020 – September 2023',
//     responsibilities: [
//       'Monitored security events using Splunk and ELK Stack, reducing incident response time by 35%.',
//       'Conducted vulnerability assessments and penetration testing, identifying and remediating 50+ critical vulnerabilities.',
//       'Developed Python scripts to automate threat detection and incident response workflows, improving efficiency by 40%.',
//       'Implemented IAM policies in AWS and Azure, ensuring least-privilege access and compliance with security frameworks.',
//       'Led forensic investigations of security breaches, uncovering root causes and implementing preventive measures.',
//       'Collaborated with IT teams to design and enforce security policies aligned with NIST and ISO 27001 standards.',
//       'Performed threat intelligence analysis to identify emerging attack vectors and update defense strategies.',
//       'Configured and maintained firewalls, IDS/IPS systems, and endpoint protection tools across enterprise networks.',
//       'Provided training to junior analysts on security tools, best practices, and incident escalation procedures.',
//       'Generated detailed reports on security incidents, risk assessments, and compliance audits for stakeholders.',
//       'Secured cloud infrastructure by configuring VPCs, security groups, and encryption protocols for data protection.',
//     ],
//     technologies: [
//       'Splunk', 'ELK Stack', 'Python', 'PowerShell', 'AWS', 'Azure',
//       'Wireshark', 'Nmap', 'Metasploit', 'SIEM', 'IDS/IPS', 'IAM'
//     ],
//   };

//   return (
//     <section id="experience" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading mb-4">
//             Work <span className="text-gradient">Experience</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" data-aos="fade-down" />

//             {/* Experience Card */}
//             <motion.div
//               data-aos="fade-left"
//               className="relative pl-24 pb-12"
//             >
//               {/* Timeline Dot */}
//               <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-background">
//                 <Briefcase className="w-4 h-4 text-white" />
//               </div>

//               <div className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all">
//                 <div className="flex flex-wrap items-start justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl font-heading text-primary mb-1">
//                       {experience.title}
//                     </h3>
//                     <p className="text-xl font-medium text-foreground">{experience.company}</p>
//                   </div>
//                   <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mt-2 md:mt-0">
//                     {experience.period}
//                   </span>
//                 </div>

//                 <ul className="space-y-3 mb-6">
//                   {experience.responsibilities.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.05 }}
//                       className="flex items-start space-x-3 text-muted-foreground"
//                     >
//                       <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
//                       <span>{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>

//                 <div className="flex flex-wrap gap-2">
//                   {experience.technologies.map((tech, index) => (
//                     <motion.span
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.03 }}
//                       whileHover={{ scale: 1.1 }}
//                       className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all cursor-default"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



































import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "ThinkBig Software Solutions",
      period: "Aug 2022 - Aug 2023",
      responsibilities: [
        "Built and optimized supervised learning models using Scikit-learn, XGBoost, and LightGBM, raising prediction accuracy by 18% through structured feature engineering.",
        "Designed transformer-driven NLP workflows with PyTorch and Hugging Face, increasing tagging precision by 22% across internal knowledge systems.",
        "Deployed a scalable RAG pipeline leveraging LangChain and FAISS, improving chatbot response relevance by 30% in production.",
        "Fine-tuned domain-specific LLMs using LoRA and PEFT, lowering inference latency by 25% while maintaining response consistency.",
        "Implemented structured experiment tracking with MLflow, reducing deployment discrepancies by 35%."
      ],
      technologies: [
        "Python", "PyTorch", "Hugging Face", "LangChain", "MLflow", "Docker", "AWS"
      ]
    },
    {
      title: "AI/ML Engineer Intern",
      company: "ThinkBig Software Solutions",
      period: "Dec 2021 - Jul 2022",
      responsibilities: [
        "Developed fraud detection models using Scikit-learn, improving anomaly identification accuracy by 20% after refining validation strategies.",
        "Assisted in training transformer-based NLP models with PyTorch, raising text classification F1-score by 15% through improved tokenization.",
        "Contributed to building a semantic search module using LangChain and FAISS, increasing retrieval efficiency by 35%."
      ],
      technologies: [
        "Scikit-learn", "XGBoost", "PyTorch", "LangChain", "FAISS", "FastAPI"
      ]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Westernacher Consulting",
      period: "Feb 2021 - Nov 2021",
      responsibilities: [
        "Assisted in building demand forecasting models using Scikit-learn and SQL, contributing to a 12% improvement in prediction accuracy.",
        "Optimized data extraction queries using SQL and Pandas, contributing to a 25% reduction in dashboard refresh time.",
        "Prepared structured training datasets using Pandas and NumPy, improving downstream model stability during experimentation."
      ],
      technologies: [
        "Scikit-learn", "SQL", "Pandas", "NumPy", "FastAPI", "SAP Data"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Interactive Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.03),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4 block">Journey</span>
          <h2 className="text-5xl md:text-6xl font-heading mb-6 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary/10 mx-auto rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/3 bg-primary rounded-full"
            />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Central Timeline Line - Liquid Effect */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ height: "100%", originY: 0 }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="glass group-hover:bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 hover:border-primary/30 transition-all shadow-xl group-hover:shadow-primary/5">
                    <div className="flex flex-col mb-8">
                      <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{exp.period}</span>
                      <h3 className="text-3xl font-heading text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">{exp.title}</h3>
                      <p className="text-xl font-medium text-muted-foreground/80">{exp.company}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm font-light">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-xl glass bg-primary/5 border border-primary/10 text-xs font-medium text-foreground uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[-11px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center z-10 group-hover:border-primary transition-colors shadow-glow">
                    <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform duration-500 shadow-glow" />
                  </div>
                  {/* Date label for desktop */}
                  {/* <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-6 py-2 rounded-2xl glass border border-primary/10 font-heading text-sm text-foreground shadow-sm ${index % 2 === 0 ? "left-full translate-x-12" : "right-full -translate-x-12"
                    }`}>
                    {exp.period}
                  </div> */}
                </div>

                {/* Empty Side Placeholder for desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
