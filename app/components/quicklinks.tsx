import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/quicklinks.module.css';

export default function QuickLinks() {
  return (
    <>
      <ImmobileQuickLinks />
      <MobileQuickLinks />
    </>
  );
}

function ImmobileQuickLinks() {
  return (
    <>
      <div
        className={`${styles.sideOpen} hidden lg:block bg-grey-dark fixed left-0 bottom-0`}
        style={{ top: '57px' }}
      >
        <div className="p-4 flex">
          <div className="flex-grow"></div>
          <Image
            alt="hamburger icon"
            src="/burger.svg"
            width="21"
            height="21"
          />
        </div>

        <input
          type="checkbox"
          className="opacity-0 absolute top-0 right-0 hover:cursor-pointer"
          style={{ width: '53px', height: '53px' }}
        />

        <div className="w-full bg-grey-dark">
          <span className="flex pr-6">
            <span className="p-4 text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </span>
          <span className="flex pr-6">
            <span className="p-4 text-lg font-semibold">EXPERIENCE</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </span>
          <span className="flex pr-6">
            <span className="p-4 text-lg font-semibold">PROJECTS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </span>
          <span className="flex pr-6">
            <span className="p-4 text-lg font-semibold">EDUCATION</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </span>
        </div>
      </div>
    </>
  );
}

function MobileQuickLinks() {
  return (
    <div className="lg:hidden bg-grey-dark w-full flex fixed top-0 left-0">
      <div className="flex">
        <Link
          className="pt-6 pb-6 pl-6 pr-3"
          href="https://github.com/Luke-G-Cordova"
        >
          <Image src="/github-logo.svg" width="30" height="30" alt="" />
        </Link>
        <Link
          className="pt-6 pb-6 pr-6 pl-3"
          href="https://www.linkedin.com/in/luke-cordova-099056239/"
        >
          <Image src="/linkedin-logo.svg" width="30" height="30" alt="" />
        </Link>
      </div>
      <div className="flex-grow"></div>
      <span className={`${styles.dropdown} p-6 hover:cursor-pointer`}>
        <span className="relative">
          <Image
            src="/burger.svg"
            width="30"
            height="30"
            alt="hamburger icon"
          />
        </span>
        <input
          type="checkbox"
          className="opacity-0 absolute top-0 right-0 h-full hover:cursor-pointer"
          style={{ width: '78px' }}
        />
        <div
          className="absolute left-0 w-full bg-grey-dark"
          style={{ bottom: '-240px' }}
        >
          <Link href="#skills" className="flex pr-6">
            <span className="p-4 text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </Link>
          <Link href="#experience" className="flex pr-6">
            <span className="p-4 text-lg font-semibold">EXPERIENCE</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </Link>
          <Link href="#projects" className="flex pr-6">
            <span className="p-4 text-lg font-semibold">PROJECTS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </Link>
          <Link href="#education" className="flex pr-6">
            <span className="p-4 text-lg font-semibold">EDUCATION</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </Link>
        </div>
      </span>
    </div>
  );
}
