export default function Reviews() {
  return (
    <div>
      <h1 className='font-bold text-black text-3xl mt-10 mb-7 border-b pb-5'>
        What 100 people are saying
      </h1>
      <div>
        {/* {REVIEW CARD} */}
        <div className='border-b pb-7 mb-7'>
          <div className='flex'>
            <div className='w-1/6 flex flex-col items-center'>
              <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                <h2 className='text-2xl'>MJ</h2>
              </div>
              <p className='text-black text-center'>Michael Jordan</p>
            </div>
            <div className='ml-10 w-5/6'>
              <div className='flex items-center'>
                <div className='flex mr5 text-black'>*****</div>
              </div>
              <div className='mt-5'>
                <p className='text-lg font-light text-black'>
                  We had a fabulous meal. Our waiter Mike was very accommodating
                  and knowledgeable of menu. Each dish was unbelievable, I call
                  it “off the charts” a great find in the old town area !!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {REVIEW CARD} */}
      </div>
    </div>
  );
}
