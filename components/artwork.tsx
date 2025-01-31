'use client';

import { artworks } from '@/lib/artwork';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useMouse, useWindowSize } from '@uidotdev/usehooks';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import Balancer from 'react-wrap-balancer';

const Artwork = () => {
  const [artwork, setArtwork] = useState(0);
  const enicmaRef = useRef<HTMLDivElement>(null);
  const [mouse, mouseRef] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();
  const relativeX = useMemo(
    () => mouse.x / (windowSize.width ?? 1),
    [mouse.x, windowSize.width]
  );

  useEffect(() => {
    for (const artwork of artworks) {
      const img = new window.Image();
      img.src = artwork.image.src;
    }
  }, []);

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

  const handleClick = () =>
    relativeX < 0.5
      ? setArtwork((artwork - 1 + artworks.length) % artworks.length)
      : setArtwork((artwork + 1) % artworks.length);
  const ArrowIcon = relativeX < 0.5 ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div className="h-screen w-screen" ref={mouseRef}>
      <button
        type="button"
        className="absolute z-50 outline-none"
        style={{
          top: mouse.y,
          left: mouse.x,
        }}
        onClick={handleClick}
        aria-label="Next artwork"
      >
        <ArrowIcon
          className="h-12 w-12 text-neutral-900"
          width={48}
          height={48}
        />
      </button>
      <div className="-inset-16 fixed z-0">
        <Image
          src={artworks[artwork].image}
          alt={artworks[artwork].name}
          fill
          className="opacity-10 blur-3xl"
        />
      </div>
      <div className="z-10 flex h-screen w-screen cursor-none flex-col gap-4 p-4 sm:items-center sm:justify-center sm:p-8">
        <h1 className="z-10 text-7xl text-white tracking-tight mix-blend-exclusion sm:absolute sm:top-16 sm:left-16 sm:w-[60vw] sm:text-9xl">
          <Balancer>{artworks[artwork].name}</Balancer>
        </h1>
        <blockquote className="z-10 text-sm italic sm:absolute sm:bottom-16 sm:left-16 sm:max-w-xs">
          <Balancer>{artworks[artwork].quote}</Balancer>
        </blockquote>
        <p className="right-16 z-10 text-sm sm:absolute sm:top-16 sm:max-w-xs">
          <Balancer>{artworks[artwork].text}</Balancer>
        </p>
        <div className="relative aspect-[2/3] h-full">
          <div
            id="before"
            className={clsx('absolute top-0 left-0 h-full w-full')}
          >
            {relativeX < 0.5
              ? artwork < artworks.length - 1 && (
                  <Image
                    src={artworks[artwork + 1].image}
                    alt={artworks[artwork + 1].name}
                    fill
                    className="object-cover"
                    priority
                  />
                )
              : artwork > 0 && (
                  <Image
                    src={artworks[artwork - 1].image}
                    alt={artworks[artwork - 1].name}
                    fill
                    className="object-cover"
                    priority
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
              priority
            />
          </div>
        </div>
        <div className="z-10 flex flex-col gap-2 sm:absolute sm:right-16 sm:bottom-16">
          <p className="text-sm opacity-50">Prompt</p>
          <p className="line-clamp-5 text-sm sm:max-w-xs">
            {artworks[artwork].prompt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
