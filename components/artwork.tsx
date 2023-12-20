'use client';

import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import artworks from '@/lib/artwork';
import type { FC } from 'react';

const Artwork: FC = () => {
  const [artwork, setArtwork] = useState(0);
  const enicmaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // restart animation
    if (!enicmaRef.current) {
      return;
    }

    enicmaRef.current.style.animation = 'none';
    // eslint-disable-next-line no-void
    void enicmaRef.current.offsetHeight;
    enicmaRef.current.style.animation = 'mask-playzero 2s steps(29) forwards';
  }, [artwork]);

  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        #before {
          ${artwork > 0
            ? `
          background-image: url(${artworks[artwork - 1].image});
          `
            : ''}
        }
        #after:before {
          background-image: url(${artworks[artwork].image});
        }
      `}</style>
      <div className="flex h-screen w-screen items-center justify-center p-8">
        <p className="absolute left-16 top-16 z-10 w-[80vw] text-9xl text-white mix-blend-exclusion">
          {artworks[artwork].name}
        </p>
        <p className="absolute bottom-16 right-16 z-10 max-w-xs text-sm">
          {artworks[artwork].text}
        </p>
        <blockquote className="absolute bottom-16 left-16 z-10 max-w-xs text-sm italic">
          {artworks[artwork].quote}
        </blockquote>
        <button
          type="button"
          className="absolute right-8 top-8"
          onClick={() => setArtwork((artwork + 1) % artworks.length)}
          aria-label="Next artwork"
        >
          <ArrowRightIcon
            className="h-12 w-12 text-neutral-900"
            width={48}
            height={48}
          />
        </button>
        <div className="relative aspect-[2/3] h-full">
          <div
            id="before"
            className={clsx(
              'absolute left-0 top-0 h-full w-full bg-cover bg-left-top bg-no-repeat'
            )}
          />
          <div
            ref={enicmaRef}
            id="after"
            className={clsx(
              'absolute left-0 top-0 h-full w-full',
              "before:content-[' '] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cover before:bg-left-top before:bg-no-repeat"
            )}
            style={{
              WebkitMask: 'url(/transition.png)',
              WebkitMaskSize: '3000% 100%',
              WebkitAnimation: 'mask-playzero 2s steps(29) forwards',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Artwork;
