import Artwork from '@/components/artwork';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'The Alchemist',
  description: 'A visual journey of The Alchemist, powered by Midjourney.',
  applicationName: 'Alchemy',
  openGraph: {
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/cover.png`,
        width: 1200,
        height: 630,
        alt: 'Alchemy',
      },
    ],
  },
};

const Home: FC = () => <Artwork />;

export default Home;
