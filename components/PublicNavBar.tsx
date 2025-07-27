import Link from "next/link";
import Image from "next/image";
export default function PublicNavBar() {
  return (
    <nav className="flex justify-between items-center fixed z-50 w-full h-20 bg-amber-200 px-10 gap-3">
      <Link
        href="/login"
        className="flex items-center gap-1 hover:scale-120 duration-500"
      >
        <Image src="/assets/Logo.svg" width={60} height={60} alt="Logo" />
      </Link>
    </nav>
  );
}
