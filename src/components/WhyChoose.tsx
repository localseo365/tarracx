import React from 'react';
import { Shield, Leaf, Users, MessageSquare, PiggyBank } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Por Qué Elegir TARRACX
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          La Mejor Elección para el Vaciado de Pisos y Locales en Tarragona
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Shield className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Experiencia y Profesionalidad</h3>
              </div>
              <p className="text-gray-600">
                Contamos con un equipo de especialistas que ha trabajado en numerosos proyectos de vaciado, desde pisos y locales comerciales hasta naves industriales. Nuestra experiencia nos permite adaptarnos a las necesidades específicas de cada cliente, abordando tanto vaciados sencillos como complejos, con la misma dedicación y atención al detalle.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Servicios Personalizados</h3>
              </div>
              <p className="text-gray-600">
                Sabemos que cada vaciado es único. En TARRACX, ofrecemos servicios a medida que se adaptan a tus necesidades específicas, ya sea que necesites un vaciado completo o solo el retiro de ciertos elementos. Nuestros servicios abarcan el vaciado de pisos tras mudanzas, desalojos, herencias, o cierres de negocios, entre otros.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Compromiso Medioambiental</h3>
              </div>
              <p className="text-gray-600">
                En TARRACX, estamos comprometidos con la sostenibilidad y la protección del medio ambiente. Realizamos un manejo responsable de los desechos y objetos retirados, reciclando materiales siempre que sea posible y gestionando la disposición correcta de aquellos que no se pueden reutilizar.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Atención al Cliente</h3>
              </div>
              <p className="text-gray-600">
                La satisfacción de nuestros clientes es nuestra prioridad. Desde el primer contacto, recibirás una atención cercana y personalizada, donde resolveremos todas tus dudas y te proporcionaremos la información clara que necesitas. Nos gusta ser transparentes en cada paso del proceso, desde la elaboración del presupuesto hasta la finalización del servicio.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <PiggyBank className="text-emerald-600 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold">Precios Competitivos</h3>
              </div>
              <p className="text-gray-600">
                Sabemos que el coste es una preocupación importante, por lo que en TARRACX ofrecemos precios competitivos sin comprometer la calidad de nuestro servicio. Cada presupuesto se ajusta a las necesidades específicas de tu vaciado, garantizándote un precio justo y accesible. Además, nuestros presupuestos son totalmente gratuitos y sin compromiso.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">¿Necesitas un servicio de vaciado profesional?</h4>
              <p className="text-gray-600 mb-4">
                Solicita tu presupuesto gratuito y sin compromiso ahora y descubre la calidad y el valor de nuestros servicios de vaciado en Tarragona.
              </p>
              <a 
                href="#contacto"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}