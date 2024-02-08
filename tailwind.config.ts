import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(240, 5.9%, 10%)",
                "primary-foreground": "hsl(0, 0%, 98%)",
                secondary: "hsl(240, 4.8%, 95.9%)",
                "secondary-foreground": "hsl(240, 5.9%, 10%)",
                muted: "hsl(240, 4.8%, 95.9%)",
                "muted-foreground": "hsl(240, 3.8%, 46.1%)",
            },
        },
    },
    plugins: [],
};
export default config;
