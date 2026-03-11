// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import { Award, ExternalLink } from 'lucide-react';

// const Certifications = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const [flipped, setFlipped] = useState<number | null>(null);

//   const certifications = [
//     {
//       title: 'Google Cybersecurity Professional Certificate',
//       issuer: 'Coursera',
//       description: 'Comprehensive cybersecurity training covering threat detection, incident response, and security frameworks.',
//       icon: '🔐',
//     },
//     {
//       title: 'IBM Cybersecurity Analyst Professional Certificate',
//       issuer: 'Coursera',
//       description: 'Advanced skills in security operations, threat intelligence, and compliance management.',
//       icon: '🛡️',
//     },
//     {
//       title: 'Certified in Cybersecurity (CC)',
//       issuer: 'Coursera',
//       description: 'Industry-recognized certification validating foundational cybersecurity knowledge.',
//       icon: '✅',
//     },
//     {
//       title: 'Cybersecurity Foundations',
//       issuer: 'LinkedIn Learning',
//       description: 'Essential principles of cybersecurity including risk management and security controls.',
//       icon: '📚',
//     },
//     {
//       title: 'Foundations of Cybersecurity',
//       issuer: 'Coursera',
//       description: 'Core concepts in information security, cryptography, and network security.',
//       icon: '🎓',
//     },
//   ];

//   return (
//     <section id="certifications" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading mb-4">
//             Certifications & <span className="text-gradient">Credentials</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={index}
//               data-aos="flip-left"
//               data-aos-delay={index * 100}
//               className="relative h-64 cursor-pointer perspective-1000"
//               onMouseEnter={() => setFlipped(index)}
//               onMouseLeave={() => setFlipped(null)}
//             >
//               <motion.div
//                 animate={{ rotateY: flipped === index ? 180 : 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative w-full h-full preserve-3d"
//               >
//                 {/* Front */}
//                 <div className="absolute inset-0 backface-hidden glass rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center text-center">
//                   <div className="text-6xl mb-4 animate-bounce-in">{cert.icon}</div>
//                   <Award className="w-8 h-8 text-primary mb-3" />
//                   <h3 className="font-heading text-lg mb-2">{cert.title}</h3>
//                   <p className="text-sm text-muted-foreground">{cert.issuer}</p>
//                   <div className="absolute bottom-4 text-xs text-primary animate-pulse">
//                     Hover to learn more
//                   </div>
//                 </div>

//                 {/* Back */}
//                 <div className="absolute inset-0 backface-hidden rotate-y-180 gradient-primary rounded-2xl p-6 flex flex-col justify-between text-white">
//                   <div>
//                     <h3 className="font-heading text-lg mb-3">{cert.title}</h3>
//                     <p className="text-sm opacity-90">{cert.description}</p>
//                   </div>
//                   <button className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 transition-colors">
//                     <span className="text-sm font-medium">View Certificate</span>
//                     <ExternalLink className="w-4 h-4" />
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Certifications;


































import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Binary, Cpu, Globe, Zap, LineChart } from 'lucide-react';

const Certifications = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Google IT Support Professional',
      issuer: 'Coursera',
      description: 'Foundational IT support tasks including troubleshooting, customer service, networking, operating systems, and security.',
      icon: Award,
    },
    {
      title: 'Google Data Center Networking',
      issuer: 'Coursera',
      description: 'Core concepts of data center networking, including topologies, protocols, and hardware components.',
      icon: Globe,
    },
    {
      title: 'IBM IT Infrastructure & Ops',
      issuer: 'Coursera',
      description: 'Foundations of IT infrastructure, including hardware, software, and operations management.',
      icon: Cpu,
    },
    {
      title: 'Google Cloud Networking Basics',
      issuer: 'Coursera',
      description: 'Introduction to networking in Google Cloud Platform, including VPCs, Load Balancing, and DNS.',
      icon: Zap,
    },
    {
      title: 'Microsoft Azure Networking',
      issuer: 'Coursera',
      description: 'Foundational knowledge of Azure networking services and architecture.',
      icon: LineChart,
    },
    {
      title: 'Linux Server Mgmt & Security',
      issuer: 'Coursera',
      description: 'Skills for managing and securing Linux servers in an enterprise environment.',
      icon: Binary,
    },
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Validation</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Certifications & <span className="text-accent italic">Credentials</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-accent rounded-full"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer perspective-2000 group"
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass-premium rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
                  <div className="relative w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <cert.icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground leading-tight tracking-tight">{cert.title}</h3>
                  <p className="text-accent font-bold text-[10px] tracking-widest uppercase">{cert.issuer}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-premium border-accent/30 rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h3 className="font-heading text-xl mb-4 text-accent tracking-tight">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center space-x-2 text-accent group-hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Verified Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default Certifications;
