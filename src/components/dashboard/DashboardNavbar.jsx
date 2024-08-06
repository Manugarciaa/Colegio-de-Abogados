import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, Briefcase, BookOpen, Calendar, User, Settings, LogOut, Menu, X } from 'lucide-react';

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const NavLink = ({ href, icon: Icon, children }) => {
    const isActive = router.pathname === href || router.pathname.startsWith(href + '/');
    return (
      <Link href={href} className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
        <Icon size={18} />
        <span className="text-sm font-medium">{children}</span>
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800 font-serif">Colegio de Abogados</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink href="/dashboard" icon={Home}>Inicio</NavLink>
            <NavLink href="/dashboard/cases" icon={Briefcase}>Casos</NavLink>
            <NavLink href="/dashboard/library" icon={BookOpen}>Biblioteca</NavLink>
            <NavLink href="/dashboard/events" icon={Calendar}>Eventos</NavLink>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-3 relative group">
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="Usuario" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">Abogado</span>
              </div>
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <User className="inline-block mr-2" size={16} />Perfil
                </Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Settings className="inline-block mr-2" size={16} />Configuración
                </Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => { /* Implementar lógica de cierre de sesión */ }}>
                  <LogOut className="inline-block mr-2" size={16} />Cerrar sesión
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/dashboard" icon={Home}>Inicio</NavLink>
            <NavLink href="/dashboard/cases" icon={Briefcase}>Casos</NavLink>
            <NavLink href="/dashboard/library" icon={BookOpen}>Biblioteca</NavLink>
            <NavLink href="/dashboard/events" icon={Calendar}>Eventos</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="/api/placeholder/32/32" alt="Usuario" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Abogado</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link href="/dashboard/profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                <User className="inline-block mr-2" size={16} />Perfil
              </Link>
              <Link href="/dashboard/settings" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                <Settings className="inline-block mr-2" size={16} />Configuración
              </Link>
              <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100" onClick={() => { /* Implementar lógica de cierre de sesión */ }}>
                <LogOut className="inline-block mr-2" size={16} />Cerrar sesión
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;