interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ name, type = "button" }: ButtonProps) {
  return (
    <button type={type} className="bg-blue-500 px-8 py-2 rounded-md">
      {name}
    </button>
  );
}
