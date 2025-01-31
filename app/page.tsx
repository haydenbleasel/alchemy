import Artwork from '@/components/artwork';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'Alchemy',
  description: 'A visual journey of The Alchemist, powered by Midjourney.',
  applicationName: 'Alchemy',
  authors: [{ name: 'Hayden Bleasel', url: 'https://haydenbleasel.com' }],
  creator: 'Hayden Bleasel',
  openGraph: {
    locale: 'en_US',
    title: 'Alchemy',
    description: 'A visual journey of The Alchemist, powered by Midjourney.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@haydenbleasel',
  },
};

const Home: FC = () => <Artwork />;

export default Home;
