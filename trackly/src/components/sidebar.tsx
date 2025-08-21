"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DottedSeparator } from './dotted-separator';
import Navigation from './navigation';
import WorkSpaceSwitcher from './workspace-switcher';
import Projects from './Projects';

const Sidebar = () => {
  console.log("Projects component:", Projects);
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkSpaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};

export default Sidebar;
