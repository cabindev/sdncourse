interface props {
    children: React.ReactNode;
    className?: string;
}

export default function Form({ children, className }: props) {
    return <form className={className}>{children}</form>;
}
