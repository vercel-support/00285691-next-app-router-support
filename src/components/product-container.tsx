'use client';

import { useId } from 'react';
import Link from 'next/link';

const ProductContainer = () => {
  const componentId = useId();

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center *:text-center">
      <h1>Product Container {componentId}</h1>
      <Link className="underline" href="/product/46042092/Mothtech 오가닉 코튼 티셔츠">
        Move to Product Detail Page
      </Link>
    </div>
  );
};

export default ProductContainer;
