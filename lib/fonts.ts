import { Cardo as createSerif } from '@next/font/google';

export const serif = createSerif({
  variable: '--font-serif',
  style: 'normal',
  subsets: ['latin'],
  weight: '400',
});
