const Profile = () => {
  return (
    <section className='px-4 py-2.5 text-sm text-white'>
      <p className='mb-2 text-black'>Hi, Good Morning</p>
      <div className='w-full h-32 bg-red-500 rounded-md p-2'>
        <div className='flex justify-between items-start'>
          <div className='flex justify-start gap-4 items-start'>
            <div className='bg-slate-600 w-14 h-14 overflow-hidden rounded-full flex justify-center items-end'>
              <img
                src='https://randomuser.me/api/portraits/men/12.jpg'
                alt='tabay'
                className='block w-10 h-10 rounded-full'
              />
            </div>
            <div>
              <h4 className='font-bold text-sm'>Tabay</h4>
              <p className='text-[10px] italic text-white opacity-80'>
                UI/UX Designer
              </p>
            </div>
          </div>

          <div className='text-end'>
            <p className='text-[10px] italic text-white opacity-80'>
              Member Since
            </p>
            <p className='text-sm font-bold'>01 Juni 2021</p>
          </div>
        </div>
        <div className='w-full h-[56px] flex justify-between items-end'>
          <div>
            <p className='text-[10px] italic text-white opacity-80'>Location</p>
            <p className='text-white'>Kantor Sahid</p>
          </div>
          <p className='text-[10px] italic text-white opacity-80'>ICO</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
