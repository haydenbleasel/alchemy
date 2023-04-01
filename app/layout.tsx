import type { FC, ReactNode } from 'react';
import '@/styles/globals.css';
import clsx from 'clsx';
import { serif } from '@/lib/fonts';
import { Analytics } from '@/components/analytics';

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <html lang="en" className={clsx(serif.variable, 'bg-neutral-50 font-serif')}>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default Layout;
