// RootLayout.tsx
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Sidebar fixed on the left */}
        <Sidebar/>

        {/* Main content with left margin = sidebar width */}
        <main className="ml-56 p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
