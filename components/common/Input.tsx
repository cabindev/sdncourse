interface props {
    type: string;
    name: string;
    placeholder?: string;
    defaultValue?: any;
    required?: boolean;
    accept?: string;
}

export default function Input({
    type,
    name,
    placeholder,
    defaultValue,
    required = false,
    accept,
}: props) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full px-4 py-2 outline-none border rounded-lg"
            required={required}
            accept={accept}
        />
    );
}
