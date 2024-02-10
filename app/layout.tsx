import "./globals.css";
import Header from "@/components/Header";
import { Anuphan } from "next/font/google";
import { getSession } from "@/libs/auth";

const anuphan = Anuphan({ subsets: ["thai"] });

interface props {
    children: React.ReactNode;
}

export default async function layout({ children }: props) {
    const session = await getSession();

    return (
        <html lang="en">
            <body className={anuphan.className}>
                <Header member={session?.payload} />
                {children}
            </body>
        </html>
    );
}
