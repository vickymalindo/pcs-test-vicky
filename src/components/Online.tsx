import { onlineData } from '../utils/online';

const Online = () => {
  return (
    <section className='px-4 py-2'>
      <h4 className='font-bold mb-3'>Online</h4>
      <div className='shadow-md shadow-slate-400 w-full h-24 rounded flex items-center justify-center'>
        {onlineData.map((item, index) => {
          return (
            <div
              className={`relative -left-[${item.left * 2}px] z-[${
                item.zIndex * 10
              }]`}
              key={index}>
              <img
                src={item.src}
                alt={item.name}
                className='block w-7 h-7 rounded-full m-auto border border-white'
              />
              <p className='text-center font-bold text-[10px]'>{item.name}</p>
              <p className='text-center text-[9px]'>{item.location}</p>
            </div>
          );
        })}
        <div>
          <div className='w-7 h-7 rounded-full text-center bg-red-400 p-1'>
            <p className='text-[7px] text-white'>10 More</p>
          </div>

          <p className='font-bold text-[10px] text-white'>Jefrii</p>
          <p className='text-[9px] text-white'>Sahid</p>
        </div>
      </div>
    </section>
  );
};

export default Online;
