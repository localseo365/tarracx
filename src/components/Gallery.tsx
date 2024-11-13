import React from 'react';

export default function Gallery() {
  const projects = [
    {
      before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&q=80&w=800",
      title: "Piso en Centro Tarragona"
    },
    {
      before: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800",
      title: "Local Comercial Reus"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&q=80&w=800",
      title: "Nave Industrial Vendrell"
    }
  ];

  return (
    <section id="galeria" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Antes y Después
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reales de nuestros servicios de vaciado y limpieza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src={project.before} 
                    alt={`Antes - ${project.title}`}
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                  <p className="text-center mt-2 text-sm text-gray-600">Antes</p>
                </div>
                <div>
                  <img 
                    src={project.after} 
                    alt={`Después - ${project.title}`}
                    className="rounded-lg shadow-md h-48 w-full object-cover"
                  />
                  <p className="text-center mt-2 text-sm text-gray-600">Después</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}