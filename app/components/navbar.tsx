import Image from 'next/image';
import styles from '@/components/styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className="w-full flex pt-3">
      <Tab current={true}>
        <div className="flex items-center h-full gap-2">
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
        </div>
      </Tab>
      <Tab current={false}>
        <div className="flex items-center h-full gap-2">
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
        </div>
      </Tab>
      <Tab current={false}>
        <div className="flex items-center h-full gap-2">
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
        </div>
      </Tab>
      <Tab current={false}>
        <div className="flex items-center h-full gap-2">
          <span className="pl-1">
            <Image
              src="/Rectangle.png"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="pl-1">
            <Image
              src="/Rectangle.png"
              alt="rectangle"
              width="20"
              height="20"
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
          </span>
          <span className="">Socials</span>
        </div>
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
