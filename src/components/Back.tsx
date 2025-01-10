import Link from "next/link";

const Back = () => {
  return (
    <Link
      className="mt-8 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#333] bg-gray-100 hover:text-white hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      href="/"
    >
      HOME
    </Link>
  );
};

export default Back;
