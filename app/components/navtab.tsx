'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/navbar.module.css';

// TODO: using `usePathname` forces this to be a client component.
// TODO: I abstracted `Tab` to its own file so that the Navbar could
// TODO: be server rendered. Not sure if usePathname is needed.
// TODO: Should avoid client components!!!
// TODO: Consider adding the navbar to the top of each page and manually
// TODO: updating the current tab depending on the page.
// TODO: example <Navbar current={'/terminal'} /> to signify that the current
// TODO: page is the `/terminal`. This will allow server rendering.
import { usePathname } from 'next/navigation';

export default function Tab({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div className="flex-grow overflow-clip" style={{ maxWidth: '353px' }}>
      <div
        className={`${styles.navTab} ${path === href ? styles.current : ''}`}
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
