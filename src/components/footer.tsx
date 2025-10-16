import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:justify-between gap-8  md:items-start md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=36&h=36&fit=crop" alt="Hazzy" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            hazzy
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 hazzy</p>
      </div>
      <div className=" flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href=""> Homepage </Link>
        <Link href=""> Contact </Link>
        <Link href=""> Terms of service </Link>
        <Link href=""> Privacy Policy </Link>
      </div>
      <div className=" flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href=""> Homepage </Link>
        <Link href=""> Contact </Link>
        <Link href=""> Terms of service </Link>
        <Link href=""> Privacy Policy </Link>
      </div>
      <div className=" flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href=""> Homepage </Link>
        <Link href=""> Contact </Link>
        <Link href=""> Terms of service </Link>
        <Link href=""> Privacy Policy </Link>
      </div>
      <div className=" flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href=""> Homepage </Link>
        <Link href=""> Contact </Link>
        <Link href=""> Terms of service </Link>
        <Link href=""> Privacy Policy </Link>
      </div>
    </div>
  );
};

export default Footer;
