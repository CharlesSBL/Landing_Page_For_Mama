import './index.css';
import { useEffect, useRef } from 'react';
import { Logo } from '../index';

const handleClick = (event: Event) => {
  const item = event.target as HTMLElement;

  if(item){
    alert(item.className.replace("item item_", ""));
  };
};

export default function Menu() {
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    list.current?.addEventListener('click', handleClick);

    return () => {
      list.current?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='container'>
      <ul ref={list} className='list'>
        <li className='item item_1'>Shop</li>
        <li className='item item_2'>Gallery</li>
        <li className='item item_3'>Creativity</li>
        <li className='item item_4'><Logo /></li>
        <li className='item item_5'>Exhibitions</li>
        <li className='item item_6'>Press</li>
        <li className='item item_7'>Contact</li>
      </ul>
    </div>
  );
};
