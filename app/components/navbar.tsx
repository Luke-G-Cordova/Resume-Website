import Image from 'next/image';
import styles from '@/components/styles/navbar.module.css';
import Link from 'next/link';

// ! usePathname forces this to be a client component.
// ! research more to understand if this needs to be a
// ! client component or if I can render this in a
// ! different way.
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="w-full flex pt-3">
      <Tab current={path === '/terminal'}>
        <Link href="/terminal" className="flex items-center h-full gap-2">
          <span className="pl-1">
            <Image
              src="/Rectangle.png"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="">LukeGallianoCordova - CLI</span>
        </Link>
      </Tab>
      <Tab current={path === '/'}>
        <Link href="/" className="flex items-center h-full gap-2">
          <span className="pl-1">
            <Image
              src="/Rectangle.png"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="">Web User Interface</span>
        </Link>
      </Tab>
      <Tab current={path === '/about'}>
        <Link href="/about" className="flex items-center h-full gap-2">
          <span className="pl-1">
            <Image
              src="/Rectangle.png"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="">About This Website</span>
        </Link>
      </Tab>
      <Tab current={path === '/socials'}>
        <Link href="/socials" className="flex items-center h-full gap-2">
          <span className="pl-1 flex gap-1">
            <Image
              src="/github-logo.svg"
              alt="github"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
            <Image
              src="/linkedin-logo.svg"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="">Socials</span>
        </Link>
      </Tab>
    </div>
  );
}

function Tab({
  current,
  children,
}: {
  current: boolean;
  children?: React.ReactNode;
}) {
  return (
    <span className="flex-grow overflow-clip" style={{ maxWidth: '353px' }}>
      <div className={`${styles.navTab} ${current ? styles.current : ''}`}>
        <div
          className="text-white bg-grey-dark font-segoe font-semibold text-lg p-3 rounded-t-2xl overflow-clip relative text-nowrap"
          style={{ height: '45px', letterSpacing: '-.04em' }}
        >
          {children}
          <div className="h-full flex bg-inherit items-center p-4 rounded-tr-2xl float-right absolute right-0 top-0">
            <Image src="/dot.svg" alt="X" width="8" height="8" />
          </div>
        </div>
      </div>
    </span>
  );
}
