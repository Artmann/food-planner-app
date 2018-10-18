import React from 'react';
import { Link } from 'react-router-dom';
import { FaListUl, FaRegistered, FaShoppingCart } from 'react-icons/fa';
import './navigation.css';

const renderItem = (item, key) => <Link key={key} to={item.path} title={item.title} className="navigation__link">
  {item.icon}
</Link>;

const Navigation = () => {
  const items = [
    { title: 'Alla Recept', path: '/', icon: <FaRegistered /> },
    { title: 'Receptlista', path: '/recipe-list', icon: <FaListUl /> },
    { title: 'Handlingslista', path: '/shop', icon: <FaShoppingCart /> }
  ];

  return (
    <div className="navigation">
      { items.map((item, i) => renderItem(item, i) ) }
    </div>
  );
};

export default Navigation;