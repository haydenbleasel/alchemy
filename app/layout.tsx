import '@/styles/globals.css';
import { serif } from '@/lib/fonts';
import { Analytics } from '@/components/analytics';
import { cn } from '@/lib/utils';
import type { FC, ReactNode } from 'react';

type LayoutProps = {
  readonly children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en" className={cn(serif.variable, 'bg-neutral-50 font-serif')}>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default Layout;
