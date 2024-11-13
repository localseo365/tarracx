import React from 'react';
import { ArrowRight, Clock, Truck, Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20">
      <div className="relative min-h-screen pb-32">
        <div className="fixed inset-0">
          <img 
            src="https://images.unsplash.com/photo-1639650708447-8dc68c363563?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vaciado de pisos en Tarragona" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expertos en Vaciado de Pisos en Tarragona
            </h1>
            <p className="text-xl mb-8">
              Servicio profesional, rápido y eficiente de vaciado de pisos, locales y naves industriales. 
              Tasación justa y gestión responsable de residuos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-32">
              <a 
                href="#contacto" 
                className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="https://wa.link/mo65k1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="container mx-auto px-4 -mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
              <Clock className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Servicio 24/7</h3>
                <p className="text-gray-600">Disponibles para urgencias las 24 horas del día</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
              <Truck className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Transporte Incluido</h3>
                <p className="text-gray-600">Nos encargamos de toda la logística</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
              <Recycle className="text-emerald-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg">Gestión Responsable</h3>
                <p className="text-gray-600">Reciclaje y tratamiento ecológico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}