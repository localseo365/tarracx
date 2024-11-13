import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TARRACX</h3>
            <p className="text-gray-400">
              Especialistas en vaciado de pisos y locales en Tarragona
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Carrer Sant Benilde, 23, 43006 Tarragona</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:690220944" className="hover:text-white">690 22 09 44</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@tarracx.es" className="hover:text-white">info@tarracx.es</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe size={16} />
                <a href="https://tarracx.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">tarracx.vercel.app</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white">Vaciado de pisos</a></li>
              <li><a href="#servicios" className="hover:text-white">Vaciado de locales</a></li>
              <li><a href="#servicios" className="hover:text-white">Limpieza integral</a></li>
              <li><a href="#servicios" className="hover:text-white">Tasación de muebles</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicio 24h</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Aviso legal</a></li>
              <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white">Política de cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Áreas de Servicio</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tarragona capital</li>
              <li>Reus</li>
              <li>Salou</li>
              <li>Cambrils</li>
              <li>Vendrell</li>
              <li>Valls</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TARRACX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}