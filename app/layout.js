import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BMI calc",
  description: "Front End Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen relative`}>
        <div className="absolute top-0 left-0 w-full lg:w-[70%] h-[735px] rounded-br-[40px] bg-gradient-to-r from-[#D6E6FE] to-[#D6FCFE]"></div>
        {children}
      </body>
    </html>
  );
}
