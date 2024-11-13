import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      location: "Tarragona Centro",
      text: "Excelente servicio, muy profesionales y rápidos. Dejaron el piso impecable y el precio fue muy justo.",
      rating: 5
    },
    {
      name: "José Martínez",
      location: "Reus",
      text: "Necesitaba vaciar un local con urgencia y respondieron en menos de 2 horas. Muy recomendable.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      location: "Salou",
      text: "Gran trabajo con el vaciado de mi piso antiguo. Muy ordenados y cuidadosos con todo el proceso.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Opiniones Verificadas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestro servicio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}