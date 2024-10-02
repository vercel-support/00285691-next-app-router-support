import { ProductContainer } from '@/components';
import { Metadata } from 'next';
import { staticMetadata } from '@/utils';
import { AppConfigDynamic } from 'next/dist/build/utils';

export const dynamic: AppConfigDynamic = 'force-static';

export const metadata: Metadata = staticMetadata({ title: 'Static Metadata' });

export default function Page() {
  return (
    <>
      <ProductContainer />
    </>
  );
}
