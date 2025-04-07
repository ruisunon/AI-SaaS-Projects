
import appConfig from '@/config/app-config'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const container = cva('flex gap-x-10');

const itemClass = cva(
  'text-slate-300 hover:text-slate-100 transition-all duration-150 font-normal text-lg',
);

export function NavigationMenu() {
  return (
    <>
      <ul className={container()}>
        {appConfig.navigationMenu.map((menuItem, idx) => (
          <Link className={itemClass()} href={menuItem.url} key={idx}>
            {menuItem.item}
          </Link>
        ))}
      </ul>
    </>
  );
}
