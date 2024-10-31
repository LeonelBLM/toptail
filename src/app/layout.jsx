import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import "./globals.css";
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex h-screen bg-white dark:bg-black transition-colors duration-200">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 text-gray-600 dark:text-white">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}