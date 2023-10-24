import { bottomBarData } from '../utils/bottomBar';
import Icons from './Icons';

const BottomBar = () => {
  return (
    <footer className='shadow shadow-slate-400 px-4 py-2 w-full flex justify-between items-center sticky bottom-0 bg-white mt-16  '>
      {bottomBarData.map((item, index) => {
        let color = '';
        if (index === 1 || index === 3 || index === 4) {
          color = 'text-slate-400';
        } else {
          color = 'text-orange-500';
        }
        return (
          <section className='relative w-full' key={index}>
            <div
              className={`${color} text-xl ${
                index === 2
                  ? 'absolute w-10 h-10 flex justify-center items-center -top-7 left-2.5 bg-orange-400 rounded-full text-white'
                  : ''
              }`}>
              <Icons type={item.image} />
            </div>
            <p
              className={`${color} text-[10px] text-center ${
                index === 2 ? 'mt-5' : ''
              }`}>
              {item.text}
            </p>
          </section>
        );
      })}
    </footer>
  );
};

export default BottomBar;
