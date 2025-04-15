export const metadata = {
  title: "Real Delta Land",
  description: "Descoperă frumosul Delta Dunării – Prezentare și Rezervări",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-green-700 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Real Delta Land</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Real Delta Land</p>
        </footer>
      </body>
    </html>
  );
}