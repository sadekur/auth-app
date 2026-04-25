import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Auth App - Login",
  description: "Secure authentication system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}