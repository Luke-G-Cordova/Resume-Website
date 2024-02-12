import Image from 'next/image';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="w-full" style={{ height: '100vh' }}>
      <Navbar currentPath="/" />
      <div className="w-full h-full bg-black"></div>
    </div>
  );
}
