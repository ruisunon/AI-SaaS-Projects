import { cva } from 'class-variance-authority';
import React from 'react'
import { Button } from '../ui/button';

const buttonContainer = cva('flex gap-x-3 items-center');
export function AccessControl() {
  return (
    <div className={buttonContainer()}>
      <Button variant="ghost">Login</Button>
      <Button variant="default">SignUp</Button>
    </div>
  );
}

export default AccessControl
