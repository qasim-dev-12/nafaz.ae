import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo/nafaz-logo-cropped.png"
        alt="Nafaz Logo"
        width={130}
        height={123}
        quality={100}
        className="h-14 w-auto dark:hidden"
      />
      <Image
        src="/images/logo/nafaz-logo-dark.png"
        alt="Nafaz Logo"
        width={140}
        height={140}
        quality={100}
        className="hidden h-20 w-auto dark:block"
      />
    </Link>
  );
};

export default Logo;
