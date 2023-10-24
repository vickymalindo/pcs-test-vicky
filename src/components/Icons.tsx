import { BsArrowRightShort, BsCheck } from 'react-icons/bs';
import { CgPill } from 'react-icons/cg';
import { FaCoins } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';

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
      ) : (
        <BsArrowRightShort />
      )}
    </div>
  );
};

export default Icons;
