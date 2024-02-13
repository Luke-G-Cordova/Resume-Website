import Image from 'next/image';
import Navbar from './components/navbar';
import QuickLinks from './components/quicklinks';

export default function Home() {
  return (
    <>
      {/* <Navbar currentPath="/" /> */}
      <div className="w-full" style={{ height: '100vh' }}>
        <QuickLinks />
        <div className="w-full h-full bg-black"></div>
      </div>
    </>
  );
}
