import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/quicklinks.module.css';

export default function QuickLinks() {
  return (
    <>
      <ImmobileQuickLinks>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </div>
          <div className="flex">
            <div
              className={`${styles.sideLinks} flex flex-col border-l-2 ml-3 mt-2`}
            >
              <Link href="#languages">languages</Link>
              <Link href="#concepts">concepts</Link>
              <Link href="#web_development">web development</Link>
              <Link href="#code_management">code management</Link>
              <Link href="#clis">cli’s</Link>
              <Link href="#micro_controllers">
                micro controllers / engineering
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/dot.svg" alt="dot" width="8" height="8" />
          </div>
          <div className="flex">
            <div
              className={`${styles.sideLinks} flex flex-col border-l-2 ml-3 mt-2`}
            >
              <Link href="#languages">languages</Link>
              <Link href="#concepts">concepts</Link>
              <Link href="#web_development">web development</Link>
              <Link href="#code_management">code management</Link>
              <Link href="#clis">cli’s</Link>
              <Link href="#micro_controllers">
                micro controllers / engineering
              </Link>
            </div>
          </div>
        </div>
      </ImmobileQuickLinks>

      <MobileQuickLinks />
    </>
  );
}

function ImmobileQuickLinks({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div
        className={`${styles.sideOpen} hidden lg:block bg-grey-dark fixed left-0 bottom-0 p-3`}
        style={{ top: '57px' }}
      >
        {children}
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
