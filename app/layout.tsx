import Header from "@/components/Header";
import "./globals.css";
import { Anuphan } from "next/font/google";

const anuphan = Anuphan({ subsets: ["latin"] });

interface props {
    children: React.ReactNode;
}

export default function layout({ children }: props) {
    return (
        <html lang="en">
            <body className={anuphan.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
