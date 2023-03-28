'use client';

import clsx from 'clsx';
import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import artworks from '@/lib/artwork';

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
      <style jsx>{`
        #fondo {
          ${artwork > 0
            ? `
          background-image: url(${artworks[artwork - 1].image});
          `
            : ''}
        }
        #encima:before {
          background-image: url(${artworks[artwork].image});
        }
      `}</style>
      <div className="flex h-screen w-screen p-8">
        <div className="flex-1">
          <p>{artworks[artwork].name}</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setArtwork((artwork + artworks.length - 1) % artworks.length)
              }
            >
              <ArrowLeftIcon
                className="h-6 w-6 text-neutral-400"
                width={24}
                height={24}
              />
            </button>
            <button
              type="button"
              onClick={() => setArtwork((artwork + 1) % artworks.length)}
            >
              <ArrowRightIcon
                className="h-6 w-6 text-neutral-400"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="relative aspect-[2/3] h-full shrink-0">
          <div
            id="fondo"
            className={clsx(
              'absolute left-0 top-0 h-full w-full bg-cover bg-left-top bg-no-repeat'
            )}
          />
          <div
            ref={enicmaRef}
            id="encima"
            className={clsx(
              'absolute left-0 top-0 h-full w-full',
              "before:content-[' '] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-cover before:bg-left-top before:bg-no-repeat"
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
