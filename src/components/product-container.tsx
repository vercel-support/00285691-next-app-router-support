'use client';

import { useId } from 'react';

const ProductContainer = () => {
  const componentId = useId();

  return <div className="flex h-[100vh] w-[100vw] items-center justify-center">Product Container {componentId}</div>;
};

export default ProductContainer;
