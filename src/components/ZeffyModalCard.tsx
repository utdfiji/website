'use client';

import React, { useEffect, useId, useState } from 'react';

type ZeffyModalCardProps = {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  buttonText?: string;
  formLink: string;
  featured?: boolean;
};

export default function ZeffyModalCard({
  title,
  subtitle,
  price,
  description,
  buttonText = 'Purchase Tickets',
  formLink,
  featured = false,
}: ZeffyModalCardProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl w-full cursor-pointer ${
          featured
            ? 'bg-gradient-to-br from-purple to-purple/80 text-white shadow-xl'
            : 'bg-white text-dark-grey shadow-lg border border-gray-200'
        }`}
      >
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow text-purple text-xs font-bold px-3 py-1 rounded-full">
            RECOMMENDED
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div>
            <p className={`text-sm font-medium ${featured ? 'text-yellow' : 'text-purple'}`}>
              {subtitle}
            </p>
            <h3 className="text-3xl font-bold font-display">{title}</h3>
          </div>

          <p className={`text-4xl font-bold ${featured ? 'text-white' : 'text-purple'}`}>{price}</p>

          <p className={`${featured ? 'text-white/90' : 'text-medium-grey'}`}>{description}</p>

          <div
            className={`mt-4 inline-flex items-center gap-2 font-bold transition-all group-hover:gap-4 ${
              featured ? 'text-yellow' : 'text-purple'
            }`}
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-0 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            aria-label="Close ticket form"
            className="absolute inset-0 bg-purple/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl md:h-[90vh] md:max-w-5xl md:rounded-2xl">
            <div className="flex items-center justify-between gap-4 bg-purple px-4 py-3 text-white md:px-6">
              <h2 id={titleId} className="font-display text-lg font-bold md:text-xl truncate">
                {title}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-yellow px-3 py-1 text-sm font-bold text-purple transition hover:brightness-110"
              >
                Close
              </button>
            </div>

            <iframe
              title="Form powered and secured by Zeffy"
              src={`${formLink}${formLink.includes('?') ? '&' : '?'}cachebust=${Date.now()}`}
              className="h-full w-full flex-1 border-0 bg-white"
              allow="payment"
            />
          </div>
        </div>
      )}
    </>
  );
}
