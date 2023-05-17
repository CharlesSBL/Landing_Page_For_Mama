import './index.css';
// import logo from  './assets/icons8-luigi-240.svg';
import logo from  './assets/tree.svg';

import { useEffect, useRef } from 'react';

const handleClick = () => {
  // alert("Clicked...");
};

export default function index() {
  const ref1 = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    ref1.current?.addEventListener("click", handleClick);

    return () => {
      ref1.current?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
      <div className='block__logo'>
        <img ref={ref1} className='logo' src={logo} alt="logo"/>
      </div>
  );
};
