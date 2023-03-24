import { PRICE } from '@prisma/client';

export default function Price({ price }: { price: PRICE }) {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span className='text-black'>$$</span>
          <span className='text-gray-400'>$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span className='text-black'>$$$</span>
          <span className='text-gray-400'>$</span>
        </>
      );
    } else {
      return (
        <>
          <span className='text-black'>$$$$</span>
        </>
      );
    }
  };
  return <p className='text-black mr-3  flex'>{renderPrice()}</p>;
}
