import parse from 'html-react-parser';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Icons from '../components/Icons';
import { dataNotification } from '../utils/notification';

const Notification = () => {
  return (
    <section>
      <nav className='w-full h-16 p-4 flex justify-start items-center gap-5 shadow-lg shadow-gray-300'>
        <Link to='/'>
          <HiArrowLeft className='text-2xl' />
        </Link>
        <h2 className='text-orange-500 text-2xl font-bold'>Notification</h2>
      </nav>
      {dataNotification.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              item.bgBlue ? 'bg-blue-300' : 'bg-white'
            } py-2 px-4 flex justify-between items-start gap-2`}>
            <div className='bg-red-400 w-12 h-12 rounded-md p-1.5 flex items-center justify-center relative shadow-lg shadow-gray-400'>
              <div className='text-xl'>
                <Icons type={item.image} />
              </div>
              <div
                className={`w-4 h-4 absolute bg-red-600 rounded-full flex justify-center items-center -right-1 -bottom-1.5 text-white ${item.bgIcon}`}>
                <Icons type={item.type} />
              </div>
            </div>
            <div className='text-xs w-[57%]'>
              <h3 className='font-bold fw'>{item.title}</h3>
              {parse(item.desc)}
            </div>
            <div className='w-[20%]'>
              <p className='text-gray-400 text-xs w-max'>{item.date}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Notification;
