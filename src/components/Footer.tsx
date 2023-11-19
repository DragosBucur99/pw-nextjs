export default function Footer() {
  return (
    <footer className="relative flex flex-wrap justify-between pt-5">
      <ul className="w-[50%]">
        <li>Logo</li>
        <li>Social media</li>
      </ul>
      <ul className="w-[50%] text-end">
        <li className="font-bold">Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <span className="text-xs mt-5 w-full text-center">
        Copyright {new Date().getFullYear()} © Dragos Portfolio
      </span>
    </footer>
  );
}
