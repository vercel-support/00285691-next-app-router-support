import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductDetail } from '@/components';
import { staticMetadata } from '@/utils';

interface Props {
  slug: string[];
}

async function getData(id: string) {
  return await fetch(`https://commerce.fetchingapp.co.kr/v2/item/detail/${id}/SEO`, { cache: 'no-store' }).then((res) =>
    res.json(),
  );
}

export async function generateMetadata({ params: { slug } }: { params: Props }): Promise<Metadata> {
  const id = String(slug[0]);
  const data = await getData(id);
  return staticMetadata({
    title: `${data?.brandName} ${data?.name}`,
    openGraph: { images: data?.imageUrl },
  });
}

export default async function Page({ params: { slug } }: { params: Props }) {
  const id = String(slug[0]);
  const data = await getData(id);
  if (!data) {
    notFound();
  }
  return (
    <>
      <ProductDetail id={id} seoData={data} />
    </>
  );
}
