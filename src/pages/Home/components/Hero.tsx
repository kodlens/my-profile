
export default function() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-x-10 items-center mt-[80px]'>
        <div className=''>
          <div className='text-2xl'>Hello, I am</div>
          <div className='font-bold text-4xl mb-2'>ETIENNE WAYNE</div>
          <div className='text-xl mb-4'>Web Developer</div>
          
          <div className='flex gap-3'>
            <button className=' bg-[#ffa688] 
              rounded-sm px-5 py-2 
              font-bold text-black 
              cursor-pointer hover:bg-[#fdb096]
              ease-in duration-100'>HIRE ME</button>
            <button className='          rounded-sm 
              font-bold bg-transparent 
              border border-[#FFA688] px-5 py-2 
              cursor-pointer hover:bg-[#2b2b2b]
              ease-in duration-100'>KNOW MORE!</button>
          </div>
        </div>

        <div className="">
          <img height={300} src="/images/hm2.png" alt="profile picture" />
        </div>
      </div>
    </>

  )
}
