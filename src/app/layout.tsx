// RootLayout.tsx
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Sidebar/>

        <main className="ml-56 p-6 bg-gray-200 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
