import Image from 'next/image';
import Loader from '@/assets/loader.gif';

const LoadingSplash = () => {
  return (
    <div className={`absolute left-0 top-0 w-full h-full flex justify-center items-center`}>
      <Image className="" src={Loader} alt="loader" unoptimized />
    </div>
  )
}

export default LoadingSplash;
