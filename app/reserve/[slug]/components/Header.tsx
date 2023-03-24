export default function Header() {
  return (
    <div>
      <h3 className='font-bold text-black'>You're almost done!</h3>
      <div className='mt-5 flex'>
        <img
          src='https://resizer.otstatic.com/v2/photos/xlarge/2/48265258.jpg'
          className='w-32 h-18 rounded'
          alt=''
        />
        <div className='ml-4'>
          <h1 className='text-black text-3xl font-bold'>Cucina Mia</h1>
          <div className='flex mt-3'>
            <p className='mr-6 text-black'>Tues, 22, 2023</p>
            <p className='mr-6 text-black'>7:30PM</p>
            <p className='mr-6 text-black'>3 People</p>
          </div>
        </div>
      </div>
    </div>
  );
}
