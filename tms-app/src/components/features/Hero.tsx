import { cva } from 'class-variance-authority';
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { hero } from './style.css';
import { SpotLight } from './SpotLight';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const container = cva('relative flex w-full justify-center items-center');
const innerContainer = cva('flex flex-col items-center z-20');
const h1Container = cva('flex flex-col text-4xl font-bold text-center leading-[1,3]');
const descContainer = cva('text-sm font-normal text-gray-500 max-w-xl text-center mt-8 mb-6');
const Hero = () => {
  return (
    <div className={cn('flex flex-col w-full min-h-screen lg:mb-[20rem]')}>
      <div className={cn(container(),)}>
        <SpotLight />
        <div className={innerContainer()}>
          <h1 className={h1Container()}>
            <span>Find how you can improve</span>
            <span>your UI/UX with AI</span>
          </h1>
          <p className={descContainer()}>
            Transform your UI/UX designs with our AI: detect flaws, get tailored improvement suggestions,
            and receive a newly generated, optimized design in seconds.
          </p>
          <Button>Try it now!</Button>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Hero
