import "./globals.css";

export const metadata = {
  title: "Auth App - Login",
  description: "Secure authentication system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}