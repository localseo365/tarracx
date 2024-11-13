import React from 'react';
import { PhoneCall, FileText, Calendar, Truck, Recycle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <PhoneCall />,
      title: "Contacto Inicial y Evaluación Gratuita",
      description: "Nos comprometemos a dar respuesta inmediata a tu solicitud. Una vez que te pongas en contacto con nuestro equipo (por teléfono, WhatsApp o formulario de contacto en la web), evaluaremos tus necesidades de vaciado de forma gratuita. Esta primera toma de contacto nos permite entender mejor el alcance del trabajo: tamaño del espacio, tipo de enseres y muebles a retirar, y cualquier requerimiento especial."
    },
    {
      icon: <FileText />,
      title: "Presupuesto Personalizado",
      description: "Después de nuestra evaluación inicial, te proporcionaremos un presupuesto detallado y sin compromiso. Este presupuesto es totalmente transparente y está adaptado a la cantidad de objetos a retirar, la accesibilidad del espacio y el tiempo estimado para el vaciado. Nos aseguramos de ofrecer un precio competitivo y sin sorpresas, que refleje nuestro compromiso con la calidad."
    },
    {
      icon: <Calendar />,
      title: "Planificación y Preparación",
      description: "Una vez aceptado el presupuesto, coordinaremos la fecha y hora que mejor se adapte a tu disponibilidad. Nos encargamos de toda la logística necesaria, desde la planificación del equipo adecuado hasta la organización de los materiales de embalaje, protección y transporte de objetos."
    },
    {
      icon: <Truck />,
      title: "Ejecución del Vaciado",
      description: "El día acordado, nuestro equipo especializado llegará puntualmente al lugar y ejecutará el vaciado con máxima eficiencia. Nos encargamos de desmontar, embalar y retirar todos los enseres, muebles y materiales según el plan establecido. Nos aseguramos de trabajar con la máxima precaución para evitar daños."
    },
    {
      icon: <Recycle />,
      title: "Disposición y Reciclaje",
      description: "Nos enorgullecemos de ser una empresa comprometida con el medio ambiente. Tras finalizar el vaciado, clasificamos todos los materiales retirados para disponer de ellos de forma adecuada. Los objetos que puedan reciclarse se llevan a centros especializados, mientras que aquellos que estén en buen estado pueden donarse a asociaciones locales."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cómo Realizamos el Vaciado de Pisos y Locales en Tarragona
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="text-emerald-600">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {`Paso ${index + 1}: ${step.title}`}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contacto"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Solicita tu Presupuesto Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}