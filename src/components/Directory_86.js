import React, {useState} from 'react';
import items from './Menu-items-data';
import './Directory_86.scss';
import Menuitem_86 from './Menuitem_86';

const Directory_86 = () => {
  const [menuItems, setMenItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) =>{
          const { id, name, remoteUrl, size} =item;
          return(
            <Menuitem_86
            id={id}
            name={name}
            remoteUrl={remoteUrl}
            size={size}
          />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_86;
