"use client"
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="bg-gray-100 dark:bg-gray-800">
        <Navbar />
        
      </div>
    </ThemeProvider>
  );
}
