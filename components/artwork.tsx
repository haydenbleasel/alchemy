'use client';

import clsx from 'clsx';
import type { FC } from 'react';

const Artwork: FC = () => (
  <>
    <style jsx>{`
      #fondo {
        background-image: url(https://source.unsplash.com/random/?Beach/);
      }
      #encima:before {
        background-image: url(https://source.unsplash.com/random/?Cryptocurrency/);
      }
    `}</style>
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative aspect-[2/3] h-[90vh]">
        <div
          id="fondo"
          className={clsx(
            'absolute left-0 top-0 h-full w-full bg-cover bg-left-top bg-no-repeat'
          )}
        />
        <div
          id="encima"
          className={clsx(
            'absolute left-0 top-0 h-full w-full',
            "before:content-[' '] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-cover before:bg-left-top before:bg-no-repeat"
          )}
          style={{
            WebkitMask: 'url(http://i.imgur.com/AYJuRke.png)',
            WebkitMaskSize: '3000% 100%',
            WebkitAnimation: 'mask-playzero 2s steps(29) infinite',
          }}
        />
      </div>
    </div>
  </>
);

export default Artwork;
