import { ProductContainer } from '@/components';
import { Metadata } from 'next';
import { staticMetadata } from '@/utils';

export const metadata: Metadata = staticMetadata({ title: 'Static Metadata' });

export default function Page() {
  return (
    <>
      <ProductContainer />
    </>
  );
}
