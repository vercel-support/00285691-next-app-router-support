'use client';

interface Props {
  id: string;
  seoData: any;
}

const ProductDetail = ({ id, seoData }: Props) => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center *:text-center">
      <h1>Product Detail</h1>
      <h2 className="text-purple-900">{seoData.name}</h2>
    </div>
  );
};

export default ProductDetail;
