import Header from './[slug]/components/Header';

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  // console.log(params.slug);

  return (
    <main>
      <Header name={params.slug} />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </main>
  );
}
