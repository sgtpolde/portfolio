export default function ShopLayout({
  params,
}: {
  params: {
    id: BigInteger;
  };
}) {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col'>
        JEBENO<section>ID: {params.id}</section>
      </div>
    </div>
  );
}
