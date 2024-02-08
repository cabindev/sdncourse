interface props {
    type: string;
    name: string;
    placeholder?: string;
    defaultValue?: any;
    required?: boolean;
}

export default function Input({ type, name, placeholder, defaultValue, required = false }: props) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full px-4 py-2 outline-none border rounded-lg"
            required={required}
        />
    );
}
