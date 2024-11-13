import React from 'react';
import { MapPin, Building, Store, Home } from 'lucide-react';

export default function WorkAreas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Áreas de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios de Vaciado de Pisos y Locales en Tarragona y Alrededores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Building className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Vaciado de Pisos en Tarragona Ciudad</h3>
              </div>
              <p className="text-gray-600">
                Nuestro servicio de vaciado de pisos en Tarragona ciudad se adapta a cualquier situación, desde el vaciado completo por mudanza hasta el retiro de objetos acumulados por el paso del tiempo. Nos encargamos de gestionar todo el proceso, desde la retirada de muebles hasta la limpieza final del espacio, para que puedas disfrutar de un inmueble en perfectas condiciones.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Store className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Vaciado de Locales Comerciales</h3>
              </div>
              <p className="text-gray-600">
                Nos especializamos en el vaciado de locales comerciales, asegurándonos de que el espacio quede limpio y listo para el siguiente uso. Este servicio es ideal tanto para locales en el centro de la ciudad como para aquellos ubicados en zonas comerciales de alta demanda, como La Rambla Nova, el Mercado Central o Parc Central.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Home className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Vaciado de Inmuebles en Áreas Rurales</h3>
              </div>
              <p className="text-gray-600">
                Extendemos nuestros servicios a todas las áreas rurales y municipios cercanos. Nuestro equipo está preparado para desplazarse hasta localidades como Reus, Cambrils, Salou, Valls, y más, asegurando el mismo nivel de profesionalidad y dedicación.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Cobertura Completa en Tarragona</h3>
              </div>
              <p className="text-gray-600">
                Ya sea que estés gestionando un vaciado por mudanza, una herencia o un desalojo, nuestro servicio cubre todas las circunstancias de manera sensible y profesional. Entendemos que muchas veces el vaciado de una propiedad es una necesidad urgente o delicada, y estamos aquí para ayudarte.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">¿Necesitas un servicio de vaciado en tu zona?</h4>
              <p className="text-gray-600 mb-4">
                Confía en TARRACX para una experiencia sin estrés. Nuestro equipo se ocupa de todos los detalles, permitiéndote concentrarte en lo que realmente importa.
              </p>
              <a 
                href="#contacto"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Solicitar Visita Sin Compromiso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}