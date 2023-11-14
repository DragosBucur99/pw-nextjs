interface ButtonProps {
  name: string;
}

export default function Button({ name }: ButtonProps) {
  return (
    <button type="button" className="bg-blue-500 px-8 py-2 rounded-md">
      {name}
    </button>
  );
}
