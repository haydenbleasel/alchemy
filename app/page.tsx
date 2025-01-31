import Artwork from '@/components/artwork';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'Alchemy',
  description: 'A visual journey of The Alchemist, powered by Midjourney.',
  applicationName: 'Alchemy',
  openGraph: {
    locale: 'en_US',
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'Alchemy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@haydenbleasel',
  },
  icons: {
    icon: '/favicon.png',
  },
};

const Home: FC = () => <Artwork />;

export default Home;
