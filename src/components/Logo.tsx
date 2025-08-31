import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Diamond from '@/../public/diamond.png';

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 mr-auto">
      <Image src={Diamond} alt="" width={40} height={40} className="h-12 w-auto" />
      <div className="font-display flex flex-col">
        <h1 className="text-xl">Phi Gamma Delta</h1>
        <h2 className="text-md">Tau Delta Chapter</h2>
      </div>
    </Link>
  );
}
