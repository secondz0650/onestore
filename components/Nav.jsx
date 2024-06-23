import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="./" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">One Store</p>
      </Link>
      <div>
        <h1 className="logo_text">Your Meals Generator</h1>
      </div>
    </nav>
  );
};

export default Nav;
