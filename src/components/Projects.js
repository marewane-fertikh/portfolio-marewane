// src/components/Projects.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const projects = [
    {
      title: "SAE 1 : Python",
      description: "Étude d'une communauté dans un réseau social, avec traitement et analyse de données en Python.",
      link: "https://github.com/marewane-fertikh/SAE_Python_S1",
      image: "/image_sae1.01.png", // <-- image ajoutée (nom exact)
    },
    {
      title: "SAE 3.01 : Bibliothèque de jeux",
      description: "Première version d'une application web pour gérer une collection patrimoniale de jeux de société.",
      link: "https://github.com/marewane-fertikh/SAE_4.01_D2_Public/",
      image: "/image_sae3_01.png",
    },
    {
      title: "SAE 4.01 : Amélioration de l'application",
      description: "Audit et refonte de l'application S3, avec amélioration de la base de données et de l'interface.",
      link: "https://github.com/Dalla936/SAE4.01.D2",
      image: "/image_sae4_01.png",
    },
    {
      title: "Projet personnel : Site vitrine BTP",
      description:
        "Suite de mon stage : évolution et amélioration d’un site vitrine pour une entreprise du BTP.",
      link: "https://github.com/marewane-fertikh/site-vitrine-btp",
      image: "/image_site_vitrine.png",
    },
    {
      title: "Portfolio",
      description: "Le code source de ce portfolio, réalisé avec React et TailwindCSS.",
      link: "https://github.com/marewane-fertikh/portfolio-marewane",
      image: "/image_portefolio.png",
    },
  ];

  return (
    <section id="projets" className="py-10 bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto px-6 py-10 rounded-2xl shadow-2xl border border-purple-500/20">
        <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">Mes Projets</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="modern-swiper flex items-stretch"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-full flex">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl px-10 py-12 h-full w-full min-h-[380px] max-h-[380px] flex flex-col justify-between border border-white/20 transition-transform hover:-translate-y-2 hover:shadow-purple-500/30 duration-300">
                <div className="flex-1 flex flex-col">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 flex-1">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition shadow-lg font-semibold"
                >
                  Voir le dépôt
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 20px !important;
          height: 20px !important;
          color: #9ca3af !important;
          background: none !important;
          border: none !important;
          top: 50% !important;
          transform: translateY(-50%);
          box-shadow: none !important;
          transition: color 0.2s;
          z-index: 10;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #d1d5db !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
      `}</style>
    </section>
  );
}
