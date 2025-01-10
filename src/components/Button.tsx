import Link from "next/link";

type Props = {
  label: string;
  path: string;
};

const Button = ({ label, path }: Props) => {
  return (
    <Link
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#333] hover:text-white hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      href={path}
    >
      {label}
    </Link>
  );
};

export default Button;
