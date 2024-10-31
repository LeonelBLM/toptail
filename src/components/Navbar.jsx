'use client'
import { Bell, Moon, Sun, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className=" ml-1 pb-2 pt-2 flex items-center justify-between h-16 px-4 border-b-2 transition-colors duration-200 dark:bg-black bg-white dark:text-gray-300 text-gray-700 dark:border-gray-700 border-gray-350">
      {/* Barra de búsqueda */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 rounded-lg transition-colors duration-200 dark:bg-gray-900 bg-gray-100 dark:border-gray-800 border-gray-200 border focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
          />
        </div>
      </div>

      {/* Iconos del lado derecho */}
      <div className="flex items-center gap-4 ml-4">
        {/* Botón de tema */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Notificaciones */}
        <button className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Perfil de usuario */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-sm font-medium text-white">JD</span>
            </div>
          </button>

          {/* Menú desplegable */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 transition-colors duration-200 dark:bg-gray-900 bg-white border dark:border-gray-800 border-gray-200">
              <a
                href="/profile"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Tu Perfil
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Configuración
              </a>
              <hr className="dark:border-gray-800 border-gray-200 my-1" />
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cerrar sesión
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;