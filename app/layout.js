import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Arabic Events",
  description: "The Arabic Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="w-full h-15 bg-black flex justify-center items-center sticky top-0 z-50">
          <ul className="flex justify-center items-center">
            <li className="p-5 hover:text-green-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-5  hover:text-green-500">
              <Link href={"/event"}>Events</Link>
            </li>
            <li className="p-5  hover:text-green-500">
              <Link href={"/aboutUs"}>About Us</Link>
            </li>
            <li className="p-5  hover:text-green-500">
              <Link href={"/contactUs"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
        {children}
        <footer className="mt-20 w-full h-60 text-white bg-black flex justify-center items-center flex-col gap-2">
          <hr className="w-full"></hr>
          <h1 className="ml-10 mr-10 hover:text-gray-500">The Arabic Events</h1>
          <p className="ml-10 mr-10 text-justify hover:text-yellow-500">
            Thank you for visiting our event management website. We hope you
            found our tools and resources helpful in planning your next event.
            Our goal is to make the process as smooth and stress-free as
            possible, allowing you to focus on creating memorable experiences
            for your guests. If you have any questions or need further
            assistance, please don&#39;t hesitate to contact us. We&#39;re here
            to help. Wishing you all the best in your event planning endeavors.
            Safe travels and see you again soon!
          </p>
        </footer>
      </body>
    </html>
  );
}
