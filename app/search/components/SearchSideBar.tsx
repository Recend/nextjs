import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
      className:
        'border w-full text-black font-light rounded-l p-2 text-center',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
      className: 'border w-full text-black font-light text-center  p-2',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
      className:
        'border w-full text-black font-light rounded-r p-2 text-center',
    },
  ];
  return (
    <div className='w-1/5 '>
      <div className='border-b pb-4 flex flex-col'>
        <h1 className='mb-2 text-black font-bold'>Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className='font-light text-black capitalize'
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className='border-b pb-4 mt-3 flex flex-col'>
        <h1 className='mb-2 text-black font-bold'>Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className='font-light text-black capitalize'
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2 text-black'>Price</h1>
        <div className='flex'>
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
