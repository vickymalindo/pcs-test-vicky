import { BsArrowRightShort, BsCalendarCheck, BsCheck } from 'react-icons/bs';
import { CgPill } from 'react-icons/cg';
import { FaCoins } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';
import { HiHome } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { SiGoogleforms } from 'react-icons/si';

interface PropsIcon {
  type: string;
}

const Icons = ({ type }: PropsIcon) => {
  return (
    <div>
      {type === 'coin' ? (
        <FaCoins />
      ) : type === 'pill' ? (
        <CgPill />
      ) : type === 'clock' ? (
        <FcAlarmClock />
      ) : type === 'close' ? (
        <MdClose />
      ) : type === 'check' ? (
        <BsCheck />
      ) : type === 'home' ? (
        <HiHome className='m-auto' />
      ) : type === 'calendar' ? (
        <BsCalendarCheck className='m-auto' />
      ) : type === 'logout' ? (
        <FiLogOut className='m-auto' />
      ) : type === 'form' ? (
        <SiGoogleforms className='m-auto' />
      ) : type === 'setting' ? (
        <IoMdSettings className='m-auto' />
      ) : (
        <BsArrowRightShort />
      )}
    </div>
  );
};

export default Icons;
