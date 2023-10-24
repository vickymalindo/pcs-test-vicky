import { FaRegClock } from 'react-icons/fa';
import { IoIosRefresh } from 'react-icons/io';
import { LuClock6 } from 'react-icons/lu';

const Activity = () => {
  return (
    <section className='px-4 py-2'>
      <h4 className='font-bold mb-2'>Today's activity</h4>
      <div className='p-2 flex justify-between items-center'>
        <div className='text-center'>
          <FaRegClock className='text-orange-400 text-2xl inline-block mb-2' />
          <p className='text-sm font-bold'>08:30</p>
          <p className='text-[11px]'>Check In</p>
        </div>
        <div className='text-center'>
          <IoIosRefresh className='inline-block mb-2 text-orange-400 text-2xl' />
          <p className='text-sm font-bold text-orange-400'>03:00:00</p>
          <p className='text-[11px]'>Working Hours</p>
        </div>
        <div className='text-center'>
          <LuClock6 className='inline-block mb-2 text-orange-400 text-2xl' />
          <p className='text-sm font-bold'>--:--</p>
          <p className='text-[11px]'>Check Out</p>
        </div>
      </div>
    </section>
  );
};

export default Activity;
