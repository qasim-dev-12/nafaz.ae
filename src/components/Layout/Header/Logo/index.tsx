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
        className="h-14 w-auto"
      />
    </Link>
  );
};

export default Logo;
