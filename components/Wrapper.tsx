interface props {
    children: React.ReactNode;
    className?: string;
}

export default function Wrapper({ children, className = "max-w-5xl" }: props) {
    return <div className={`mx-auto ${className} px-4 sm:px-6 lg:px-8`}>{children}</div>;
}
