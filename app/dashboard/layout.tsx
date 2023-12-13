// Dashboard has navigation that is shared across multiple pages
// we can create a layout component that will be shared across multiple pages

import SideNav from '@/app/ui/dashboard/sidenav';

// here Layout will not re-render when we navigate between pages
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12 ">
        {children}
      </main>
    </div>
  );
}
