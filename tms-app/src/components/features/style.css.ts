"use client";
import { style } from '@vanilla-extract/css';

export const hero = style({
    ':before': {
        width: '100%',
        // height: '100vh',
        minHeight: '100vh',
        position: 'absolute',
        zIndex: 10,
        content: '',
        backgroundImage: 'url(/dot-pattern.svg)',
        opacity: 0.5,
    },
    '@media': {
        'screen and (max-width: 1024px)': {
            ':before': {
                minHeight: '100vh',
                width: '100%',
                overflow: 'hidden',
                opacity: 0.6,
            },
        },
    },
});
