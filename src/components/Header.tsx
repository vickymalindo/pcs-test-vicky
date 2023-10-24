import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center pt-6 pb-2 px-4 '>
      <h2 className='text-orange-500 text-2xl font-bold'>KerjaYuk!</h2>
      <Link to='/notif' className='relative'>
        <GoBell className='text-2xl' />
        <div className='w-2 h-2 bg-red-500 rounded-full absolute top-1 right-0.5'></div>
      </Link>
    </header>
  );
};

export default Header;
