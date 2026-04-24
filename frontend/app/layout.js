import "./globals.css";

export const metadata = {
  title: "Auth App",
  description: "Login and Registration System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}