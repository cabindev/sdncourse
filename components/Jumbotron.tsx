interface props {
    primary: string;
    secondary?: string;
}

export default function Jumbotron({ primary, secondary }: props) {
    return (
        <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight text-primary">{primary}</h2>
            {secondary && <p className="text-sm text-muted-foreground">{secondary}</p>}
        </div>
    );
}
