import parse from 'html-react-parser';
import { newsData } from '../utils/news';

const News = () => {
  return (
    <section className='px-4 py-2'>
      <h4 className='font-bold mb-3'>PCS News</h4>
      <div className='overflow-x-auto'>
        <div className='w-max flex items-center justify-center gap-2'>
          {newsData.map((val, index) => {
            return (
              <div
                key={index}
                className='rounded shadow shadow-slate-400 p-4 w-[328px]'>
                <div className='flex justify-between items-start'>
                  <div className='flex justify-start gap-4 items-center'>
                    <div className='bg-red-500 w-10 h-10 overflow-hidden rounded-full flex justify-center items-end'>
                      <img
                        src={val.image}
                        alt={val.name}
                        className='block w-7 h-7 rounded-full'
                      />
                    </div>
                    <h4 className='font-bold text-sm text-red-500'>
                      {val.name}
                    </h4>
                  </div>

                  <div className='text-end'>
                    <p className='text-[10px]'>{val.day}</p>
                    <p className='text-xs'>{val.date}</p>
                  </div>
                </div>
                <div className='text-xs text-center mt-2'>
                  {parse(val.sentence)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
