import Image from 'next/image';
import Tab from '@/components/navtab';

export default function Navbar() {
  return (
    <div className="w-full flex pt-3 bg-grey-dark fixed top-0 left-0">
      <Tab href="/terminal">
        <span className="pl-1">
          <Image
            src="/Rectangle.png"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>LukeGallianoCordova - CLI</span>
      </Tab>
      <Tab href="/">
        <span className="pl-1">
          <Image
            src="/Rectangle.png"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>Web User Interface</span>
      </Tab>
      <Tab href="/about">
        <span className="pl-1">
          <Image
            src="/Rectangle.png"
            alt="rectangle"
            width="20"
            height="20"
            style={{ minWidth: '20px', minHeight: '20px' }}
          />
        </span>
        <span>About This Website</span>
      </Tab>
      <Tab href="/socials">
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
