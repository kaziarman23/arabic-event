import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "City Event's",
    description: "City Event's",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="w-full h-10 flex justify-center items-center my-5">
                    <ul className="flex justify-center items-center">
                        <li className="p-5 hover:text-green-500">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className="p-5  hover:text-green-500">
                            <Link href={"/event"}>Event</Link>
                        </li>
                        <li className="p-5  hover:text-green-500">
                            <Link href={"/aboutUs"}>About Us</Link>
                        </li>
                        <li className="p-5  hover:text-green-500">
                            <Link href={"/contactUs"}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <hr className="mb-5"></hr>
                {children}
            </body>
        </html>
    );
}
