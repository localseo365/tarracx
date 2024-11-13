import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué tipos de objetos y enseres retiran en el servicio de vaciado de pisos en Tarragona?",
      answer: "En TARRACX, nos encargamos de retirar una amplia variedad de objetos, desde muebles y electrodomésticos hasta enseres personales y residuos acumulados. Nuestro servicio de vaciado de pisos en Tarragona incluye el retiro de camas, armarios, sofás, neveras, lavadoras, y cualquier otro tipo de mobiliario o aparato que ya no necesites. Además, gestionamos adecuadamente aquellos objetos voluminosos o pesados para evitar cualquier inconveniente. Este servicio es ideal para personas que desean liberar su espacio de forma rápida, segura y sin complicaciones."
    },
    {
      question: "¿Cuánto tiempo se tarda en realizar un vaciado de pisos o locales comerciales en Tarragona?",
      answer: "El tiempo necesario para realizar un vaciado de pisos o locales comerciales varía según el tamaño del espacio y la cantidad de objetos a retirar. En TARRACX, nos esforzamos por ofrecer un servicio rápido y eficiente, y en la mayoría de los casos podemos completar el vaciado en un solo día laboral. Gracias a nuestra experiencia en el sector y nuestro equipo especializado, reducimos al mínimo el tiempo de intervención sin sacrificar la calidad."
    },
    {
      question: "¿Qué ocurre con los objetos que retiramos durante el vaciado de pisos en Tarragona?",
      answer: "En TARRACX, nos preocupamos por el medio ambiente y la sostenibilidad. Los objetos retirados en nuestros servicios de vaciado de pisos en Tarragona son gestionados de manera responsable, priorizando la reutilización y el reciclaje siempre que sea posible. Colaboramos con centros de reciclaje y entidades locales para reducir al máximo el impacto ambiental. De este modo, puedes confiar en que cualquier objeto retirado tendrá un destino responsable y adecuado."
    },
    {
      question: "¿Pueden retirar muebles antiguos y electrodomésticos durante el vaciado de pisos en Tarragona?",
      answer: "Sí, en TARRACX nos encargamos de retirar tanto muebles antiguos como electrodomésticos obsoletos. Nuestro equipo de vaciado en Tarragona cuenta con las herramientas necesarias para deshacerse de elementos grandes y pesados de forma segura y eficiente, incluyendo su traslado a centros de reciclaje especializados. Ya sea que necesites deshacerte de un sofá, una estufa vieja o cualquier otro tipo de mobiliario, estamos aquí para ayudarte."
    },
    {
      question: "¿Qué costo tiene un servicio de vaciado de pisos en Tarragona?",
      answer: "El costo de un vaciado de pisos en Tarragona con TARRACX depende de varios factores, como el tamaño del espacio, la cantidad de objetos a retirar y las condiciones específicas del servicio (por ejemplo, si se requiere desalojo de materiales específicos). En TARRACX, te ofrecemos presupuestos claros, sin sorpresas y adaptados a tus necesidades. Nuestro equipo está disponible para realizar una valoración gratuita del espacio y ofrecerte el mejor precio posible."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes (FAQ)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de vaciado
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-emerald-600 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-emerald-600 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Tienes más preguntas? No dudes en contactarnos
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}