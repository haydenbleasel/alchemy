import Artwork from '@/components/artwork';
import type { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'The Alchemist',
  description: 'A visual journey of The Alchemist, powered by Midjourney.',
};

const Home: FC = () => <Artwork />;

export default Home;
