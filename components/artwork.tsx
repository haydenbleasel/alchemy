'use client';

import { artworks } from '@/lib/artwork';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Artwork = () => {
  const [artwork, setArtwork] = useState(0);
  const enicmaRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: "Re-run when artwork changes"
  useEffect(() => {
    if (!enicmaRef.current) {
      return;
    }

    enicmaRef.current.style.animation = 'none';
    // eslint-disable-next-line no-void
    void enicmaRef.current.offsetHeight;
    enicmaRef.current.style.animation = 'mask-playzero 2s steps(29) forwards';
  }, [artwork]);

  return (
    <div className="flex h-screen w-screen items-center justify-center p-8">
      <p className="absolute top-16 left-16 z-10 w-[80vw] text-9xl text-white mix-blend-exclusion">
        {artworks[artwork].name}
      </p>
      <p className="absolute right-16 bottom-16 z-10 max-w-xs text-sm">
        {artworks[artwork].text}
      </p>
      <blockquote className="absolute bottom-16 left-16 z-10 max-w-xs text-sm italic">
        {artworks[artwork].quote}
      </blockquote>
      <button
        type="button"
        className="absolute top-8 right-8"
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
          className={clsx('absolute top-0 left-0 h-full w-full')}
        >
          {artwork > 0 && (
            <Image
              src={artworks[artwork - 1].image}
              alt={artworks[artwork - 1].name}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div
          ref={enicmaRef}
          id="after"
          className={clsx(
            'absolute top-0 left-0 h-full w-full',
            // biome-ignore lint/nursery/useSortedClasses: <explanation>
            "before:content-[' '] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cover before:bg-left-top before:bg-no-repeat"
          )}
          style={{
            WebkitMask: 'url(/transition.png)',
            WebkitMaskSize: '3000% 100%',
            WebkitAnimation: 'mask-playzero 2s steps(29) forwards',
          }}
        >
          <Image
            src={artworks[artwork].image}
            alt={artworks[artwork].name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Artwork;
