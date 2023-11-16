interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  name,
  type = "button",
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-blue-500 px-8 py-2 rounded-md"
    >
      {name}
    </button>
  );
}
