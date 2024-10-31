import Link from 'next/link';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Mail,
  Calendar,
  Bell,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/' },
    { name: 'Analytics', icon: <BarChart2 className="w-5 h-5" />, path: '/analytics' },
    { name: 'Users', icon: <Users className="w-5 h-5" />, path: '/users' },
    { name: 'Messages', icon: <Mail className="w-5 h-5" />, path: '/messages' },
    { name: 'Calendar', icon: <Calendar className="w-5 h-5" />, path: '/calendar' },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/notifications' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' }
  ];

  return (
    <div className="flex flex-col w-64 h-screen transition-colors duration-200 dark:bg-black bg-white dark:text-gray-300 text-gray-700 p-4 border-r-2 border-gray-350 dark:border-gray-700">
      <div className="mb-8">
        <h1 className="text-xl font-bold dark:text-white text-black">Admin Panel</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;