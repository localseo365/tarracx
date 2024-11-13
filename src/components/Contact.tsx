import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: 'piso',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solicite Presupuesto Gratuito
            </h2>
            <p className="text-gray-600 mb-8">
              Rellene el formulario y nos pondremos en contacto con usted en menos de 24 horas.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de inmueble *
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option value="piso">Piso</option>
                  <option value="local">Local comercial</option>
                  <option value="nave">Nave industrial</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Solicitar Presupuesto
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-emerald-600" size={20} />
                  <a href="tel:690220944" className="text-gray-600 hover:text-emerald-600">
                    690 22 09 44
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-emerald-600" size={20} />
                  <a href="mailto:info@tarracx.es" className="text-gray-600 hover:text-emerald-600">
                    info@tarracx.es
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-emerald-600" size={20} />
                  <span className="text-gray-600">
                    Tarragona y provincia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-emerald-600" size={20} />
                  <span className="text-gray-600">
                    Disponible 24/7 para urgencias
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Área de Cobertura</h3>
              <p className="text-gray-600">
                Prestamos servicio en toda la provincia de Tarragona, incluyendo:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Tarragona capital</li>
                <li>• Reus</li>
                <li>• Salou</li>
                <li>• Cambrils</li>
                <li>• Vendrell</li>
                <li>• Valls</li>
                <li>• Y todas las poblaciones de la provincia</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Más de 10 años de experiencia</li>
                <li>✓ Presupuesto sin compromiso</li>
                <li>✓ Servicio rápido y profesional</li>
                <li>✓ Gestión responsable de residuos</li>
                <li>✓ Empresa autorizada y asegurada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}