import Sidebar from '@/app/components/sidebar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div >
        <Sidebar />
      </div>
      <main className=' flex-1 p-4 w-3/4'>
        {children}
      </main>
    </div>
  );
}