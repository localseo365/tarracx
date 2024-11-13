import React from 'react';
import { Home, Sparkles, Clock, Calculator, Truck, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home />,
      title: "Vaciado de Pisos",
      description: "En TARRACX, nos especializamos en el vaciado completo de pisos en Tarragona, proporcionando un servicio rápido, eficiente y adaptado a las necesidades de cada cliente."
    },
    {
      icon: <Sparkles />,
      title: "Vaciado de Locales Comerciales",
      description: "Ofrecemos un servicio completo de vaciado de locales en Tarragona, ideal para quienes desean revalorizar o reorientar su espacio comercial."
    },
    {
      icon: <Calculator />,
      title: "Vaciado por Desalojo o Mudanza",
      description: "Servicio especializado de vaciado para casos de desalojo o mudanza en Tarragona, ideal para quienes necesitan despejar un espacio en el menor tiempo posible."
    },
    {
      icon: <Clock />,
      title: "Retiro de Muebles y Enseres",
      description: "Servicio flexible de retiro de muebles en Tarragona. Nos ocupamos de transportar y disponer de cualquier tipo de mueble, equipo o enser que ya no necesites."
    },
    {
      icon: <Truck />,
      title: "Transporte Especializado",
      description: "Flota propia de vehículos adaptados para todo tipo de mudanzas y transportes, garantizando la seguridad de sus pertenencias."
    },
    {
      icon: <Award />,
      title: "Certificaciones",
      description: "Empresa autorizada con todas las garantías y seguros necesarios para su tranquilidad."
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios Principales de Vaciado de Pisos y Locales en Tarragona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para el vaciado y limpieza de espacios en Tarragona y provincia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-emerald-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}