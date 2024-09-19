import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar/Nav";
import FooterMain from "./components/Footer/FooterMain";
import { AuthGuard } from "./auth/AuthGuard";

export const metadata = {
  title: `Updated Exam Training by Tech Professionals`,
  description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
  verification: {
    google: "rw75WZwh1RHDs_ByvgvO904yBLGJ5_DvmW5TkHoIUEs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <Nav />
        <AuthGuard>{children}</AuthGuard>
        <FooterMain />
      </body>
    </html>
  );
}
