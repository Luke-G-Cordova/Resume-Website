import Image from 'next/image';
import Navbar from './components/navbar';
import QuickLinks from './components/quicklinks';

export default function Home() {
  return (
    <>
      <div
        className="w-full bg-black relative"
        style={{ height: '200vh', paddingTop: '57px', paddingLeft: '53px' }}
      >
        <Navbar currentPath="/" />
        <QuickLinks />
        {/* <div className="h-full bg-grey-dark" style={{ width: '53px' }}></div> */}
      </div>
    </>
  );
}
