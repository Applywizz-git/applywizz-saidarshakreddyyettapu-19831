import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise-Grade Generative AI Chatbot',
      subtitle: 'RAG & Fine-Tuning',
      image: '/AI_Chatbot_RAG & Fine-Tuning.png',
      description: 'Engineered a modular RAG pipeline with embedding-based semantic retrieval, improving accuracy by 28%.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Docker', 'AWS'],
    },
    {
      title: 'Stock Market Forecasting',
      subtitle: 'ML & Time Series',
      image: '/Stock_Market.png',
      description: 'Built sequence-based models achieving 72% directional accuracy using financial time-series modeling.',
      technologies: ['Python', 'XGBoost', 'TensorFlow', 'Optuna', 'SHAP'],
    },
    {
      title: 'AI Personal Finance Advisor',
      subtitle: 'Agentic Workflows',
      image: '/AI-Powered.png',
      description: 'Integrated agentic financial guidance using OpenAI and agentic retrieval-augmented generation.',
      technologies: ['FastAPI', 'MLflow', 'Scikit-learn', 'React'],
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Portfolio</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Featured <span className="text-accent italic">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full relative overflow-hidden">
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-accent rounded-full"
            />
          </div>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-20 !px-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[600px] rounded-[3rem] overflow-hidden glass-premium hover:border-accent/40 transition-all cursor-pointer shadow-2xl"
                >
                  {/* Image Layer with Zoom */}
                  <div className="h-2/3 overflow-hidden rounded-[2.5rem] m-4 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="p-8 pt-2">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-heading mb-4 text-foreground leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-[9px] font-bold uppercase tracking-tight text-accent/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--foreground));
          background: rgba(var(--background), 0.5);
          backdrop-filter: blur(20px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px border rgba(var(--foreground), 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: hsl(var(--foreground));
          color: hsl(var(--background));
          transform: scale(1.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
