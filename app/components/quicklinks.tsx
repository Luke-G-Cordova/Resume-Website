import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/quicklinks.module.css';

export default function QuickLinks() {
  return (
    <>
      <ImmobileQuickLinks>
        <div className={`${styles.imDropDown} flex relative flex-col`}>
          <span className="flex p-3">
            <span className="text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/arrow.svg" alt="arrow" width="9" height="6" />
          </span>
          <input
            className="opacity-0 absolute top-0 left-0 w-full hover:cursor-pointer"
            style={{ height: '52px' }}
            type="checkbox"
          />
          <div className="flex">
            <div
              className={`${styles.sideLinks} flex flex-col border-l-2 border-grey-light ml-3 mt-2`}
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

        <div className={`${styles.imDropDown} flex relative flex-col`}>
          <div className="flex p-3">
            <span className="text-lg font-semibold">SKILLS</span>
            <div className="flex-grow"></div>
            <Image src="/arrow.svg" alt="arrow" width="9" height="6" />
          </div>
          <input
            className="opacity-0 absolute top-0 left-0 w-full hover:cursor-pointer"
            style={{ height: '52px' }}
            type="checkbox"
          />
          <div className="flex">
            <div
              className={`${styles.sideLinks} flex flex-col border-l-2 border-grey-light ml-3 mt-2`}
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

      <MobileQuickLinks>
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
      </MobileQuickLinks>
    </>
  );
}

function ImmobileQuickLinks({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div
        className={`hidden lg:block bg-grey-dark fixed left-0 bottom-0`}
        style={{ top: '57px', width: '200px' }}
      >
        {children}
      </div>
    </>
  );
}

function MobileQuickLinks({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="lg:hidden bg-grey-dark w-full flex fixed top-0 left-0"
      style={{ boxShadow: '0 2px 5px rgba(0,0,0,.25)' }}
    >
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
          {children}
        </div>
      </span>
    </div>
  );
}
