import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { FC, ReactNode } from 'react';
import { serif } from '@/lib/fonts';
import { cn } from '@/lib/utils';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html className={cn(serif.variable, 'bg-neutral-50 font-serif')} lang="en">
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default Layout;
