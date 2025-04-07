"use client";
import React, { useState, useEffect } from 'react'
import { cva } from "class-variance-authority";
import { Logo } from './logo';
import { MoonStar } from 'lucide-react';
import { NavigationMenu } from './navigation-menu';
import AccessControl from './AccessControl';
import { ModeToggle } from './mode-toggle';

const container = cva("flex items-center justify-around px-8 py-6 transition-colors relative");
export function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={container()}>
      <Logo className="rounded bg-amber-600 shadow-lg hover:bg-amber-400 transition-colors" />
      <NavigationMenu />
      <AccessControl />
      {/* <button className="rounded bg-amber-400 text-neutrak-950 shadow-lg hover:bg-amber-600 transition-colors"
        onClick={toggleDarkMode}>
        <MoonStar />
      </button> */}
      <ModeToggle />
    </div>
  )
}

