import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/navbar.module.css';

export default function Navbar({ currentPath }: { currentPath: Paths }) {
  return (
    <div className="hidden w-full lg:flex pt-3 bg-grey-dark fixed top-0 left-0 z-10">
      <Tab currentPath={currentPath} href="/terminal">
        <span className="pl-1">
          <Image
            src="/Rectangle.svg"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>LukeGallianoCordova - CLI</span>
      </Tab>
      <Tab currentPath={currentPath} href="/">
        <span className="pl-1">
          <Image
            src="/WUI-icon.svg"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>Web User Interface</span>
      </Tab>
      <Tab currentPath={currentPath} href="/about">
        <span className="pl-1">
          <Image
            src="/Rectangle.svg"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>About This Website</span>
      </Tab>
      <Tab currentPath={currentPath} href="/socials">
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
        <span>Socials</span>
      </Tab>
    </div>
  );
}

function Tab({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: Paths;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="flex-grow overflow-clip"
      cy-data="navTab"
      style={{ maxWidth: '353px' }}
    >
      <div
        className={`${styles.navTab} ${
          currentPath === href ? styles.current : ''
        }`}
      >
        <Link
          href={href}
          className="text-white block bg-grey-dark font-segoe font-semibold text-lg p-3 rounded-t-2xl overflow-clip relative text-nowrap"
          style={{ height: '45px', letterSpacing: '-.04em' }}
        >
          <span className="flex items-center h-full gap-2">{children}</span>
          <div className="h-full flex bg-inherit items-center p-4 rounded-tr-2xl absolute right-0 top-0">
            <Image src="/dot.svg" alt="X" width="8" height="8" />
          </div>
        </Link>
      </div>
    </div>
  );
}
