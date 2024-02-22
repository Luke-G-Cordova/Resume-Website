import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/styles/quicklinks.module.css';

export default function QuickLinks() {
  return (
    <>
      <ImmobileQuickLinks>
        <QuickLinkGroup name="skills">
          <Link href="#languages">Languages</Link>
          <Link href="#concepts">Concepts</Link>
          <Link href="#web_development">Web Development</Link>
          <Link href="#code_management">Code Management</Link>
          <Link href="#clis">CLI’S</Link>
          <Link href="#micro_controllers">Micro Controllers / Engineering</Link>
        </QuickLinkGroup>
        <QuickLinkGroup name="experience">
          <Link href="#experience_1">May 2022 - February 2023</Link>
          <Link href="#experience_2">October 2017 - January 2022</Link>
          <Link href="#experience_3">March 2022</Link>
        </QuickLinkGroup>
        <QuickLinkGroup name="projects">
          <Link href="#boids">Boids</Link>
          <Link href="#stable-diffusion-cli">stable-diffusion-cli</Link>
          <Link href="#BetterSearch">BetterSearch</Link>
          <Link href="#imagetoascii">imageToAscii</Link>
        </QuickLinkGroup>
        <QuickLinkGroup name="education">
          <Link href="#BS_Business_Administration">
            BS Business Administration
          </Link>
          <Link href="#AS_Business_Administration">
            AS Business Administration
          </Link>
          <Link href="#AA_Economics">AA Economics</Link>
          <Link href="#AS_Natural_Science">AS Natural Science</Link>
        </QuickLinkGroup>
      </ImmobileQuickLinks>

      <MobileQuickLinks>
        <Link href="#skills" className="flex pr-6 hover:bg-black">
          <span className="p-4 text-lg font-semibold">SKILLS</span>
          <div className="flex-grow"></div>
          <Image src="/dot.svg" alt="dot" width="8" height="8" />
        </Link>
        <Link href="#experience" className="flex pr-6 hover:bg-black">
          <span className="p-4 text-lg font-semibold">EXPERIENCE</span>
          <div className="flex-grow"></div>
          <Image src="/dot.svg" alt="dot" width="8" height="8" />
        </Link>
        <Link href="#projects" className="flex pr-6 hover:bg-black">
          <span className="p-4 text-lg font-semibold">PROJECTS</span>
          <div className="flex-grow"></div>
          <Image src="/dot.svg" alt="dot" width="8" height="8" />
        </Link>
        <Link href="#education" className="flex pr-6 hover:bg-black">
          <span className="p-4 text-lg font-semibold">EDUCATION</span>
          <div className="flex-grow"></div>
          <Image src="/dot.svg" alt="dot" width="8" height="8" />
        </Link>
      </MobileQuickLinks>
    </>
  );
}

function QuickLinkGroup({
  children,
  name,
}: {
  children?: React.ReactNode;
  name: string;
}) {
  return (
    <div className={`${styles.imDropDown} flex relative flex-col`}>
      <input
        className="opacity-0 absolute top-0 left-0 w-full hover:cursor-pointer"
        style={{ height: '52px' }}
        type="checkbox"
      />
      <div className="flex p-3">
        <span className="text-lg font-semibold">{name.toUpperCase()}</span>
        <div className="flex-grow"></div>
        <Image src="/arrow.svg" alt="arrow" width="9" height="6" />
      </div>
      <div className="flex">
        <div
          className={`${styles.sideLinks} flex flex-col border-l-2 border-grey-light ml-3 mt-2`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ImmobileQuickLinks({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div
        className={`scrollBar hidden lg:block bg-grey-dark fixed left-0 bottom-0 overflow-y-auto`}
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
          <Image src="/github-logo.svg" width="30" height="30" alt="GitHub" />
        </Link>
        <Link
          className="pt-6 pb-6 pr-6 pl-3"
          href="https://www.linkedin.com/in/luke-cordova-099056239/"
        >
          <Image
            src="/linkedin-logo.svg"
            width="30"
            height="30"
            alt="LinkedIn"
          />
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
