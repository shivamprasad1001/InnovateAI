
import React from 'react';
import { IconName } from '../types';

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "w-6 h-6" }) => {
  const icons: Record<IconName, React.ReactNode> = {
    chatbot: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.862 8.25-8.625 8.25S3.75 16.556 3.75 12 7.612 3.75 12.375 3.75 21 7.444 21 12z" />
      </svg>
    ),
    automation: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    analytics: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    custom: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75M18.25 12L17 10.25M18.25 12L19.5 11.25M18.25 12L19.5 12.75M12 3.25L10.75 2M12 3.25L13.25 2M12 3.25L11.25 4.5M12 3.25L12.75 4.5M3 12.75L2 14M3 12.75L4 14M3 12.75L2.25 11.5M3 12.75L3.75 11.5M12 21.75L10.75 23M12 21.75L13.25 23M12 21.75L11.25 20.5M12 21.75L12.75 20.5M21.75 12.75L23 14M21.75 12.75L20 14M21.75 12.75L22.5 11.5M21.75 12.75L20.75 11.5" />
      </svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chevronRight: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    ),
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    briefcase: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V14.15M17.25 6.75V4.5A2.25 2.25 0 0015 2.25H9A2.25 2.25 0 006.75 4.5v2.25m10.5 0h-9" />
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18m7.5 0a7.5 7.5 0 00-7.5 0M12 12.75a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25s2.25 0 2.25-2.25v-2.25A2.25 2.25 0 0012 12.75zM12 3V2.25m0 .75A2.25 2.25 0 009.75 5.25v1.5H12V3z" />
      </svg>
    ),
     rocket: ( 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.026 12.026 0 01-3.25 4.62m3.25-4.62L21 12m-5.41-2.37a6 6 0 01-7.38 5.84m2.56-5.84A12.026 12.026 0 0112 3v4.82m2.37 5.41L12 21m2.37-5.41L21 12m-5.41-2.37a6 6 0 005.84-7.38C18.73 6.02 18 7.73 18 9.75s.73 3.73 2.37 5.41z" />
      </svg>
    ),
    target: ( 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 4.5 4.5 0 018.775-1.41 4.5 4.5 0 01-1.41 8.775m-7.365-7.365A4.5 4.5 0 006.75 12.75m6-6A4.5 4.5 0 0012.75 1.5m0 9.75A4.5 4.5 0 0117.25 6m-4.5 4.5A4.5 4.5 0 016 17.25" />
      </svg>
    ),
    userGroup: ( 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.04M18 18.72L17.25 21M18 18.72A2.986 2.986 0 0017.25 15.75m-2.998 3.084A2.987 2.987 0 0115.75 15.75m0 0A2.986 2.986 0 0018 12.666M15 15.75a2.986 2.986 0 01-2.25 2.984m2.25-2.984A2.986 2.986 0 0012.75 18.75m0 0v2.25m0-2.25A2.986 2.986 0 0110.5 15.75m0 0A2.987 2.987 0 007.25 18.75M10.5 15.75a2.986 2.986 0 012.25-2.984m0 0A2.986 2.986 0 0012.75 10.5m0 0a2.987 2.987 0 012.25 2.25m0 0A2.986 2.986 0 0018 12.666M12 10.5A2.987 2.987 0 019.75 7.5m0 0A2.987 2.987 0 007.25 10.5M9.75 7.5A2.986 2.986 0 0112 4.5m0 0A2.986 2.986 0 0114.25 7.5m0 0A2.987 2.987 0 0016.75 10.5" />
      </svg>
    ),
    buildingOffice: ( 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V11.25m8.25 9.75V11.25M12 21V9M9.75 9h4.5M12 12H5.25m13.5 0H12m0-3H5.25m13.5 0H12" />
      </svg>
    ),
    sun: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25c0 1.352.774 2.504 1.864 3.064M12 12a2.25 2.25 0 012.25 2.25c0 1.352-.774 2.504-1.864 3.064" />
      </svg>
    ),
    moon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    chatBubbleOutline: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.761c.247-.08.48-.148.708-.209C6.431 11.386 9.32 10.5 12 10.5c2.68 0 5.569.886 8.042 2.052.228.06.46.129.708.209m0 0a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H2.25A2.25 2.25 0 000 7.5v2.993c0 .98.626 1.813 1.508 2.124M2.25 12.761V16.5a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 16.5v-3.739m0-5.223c-.247.08-.48.148-.708.209C18.431 7.614 15.52 6.75 12.75 6.75c-2.68 0-5.569.886-8.042 2.052-.228.06-.46.129-.708.209" />
      </svg>
    ),
    paperAirplane: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    )
  };

  return icons[name] || null;
};

export default Icon;
