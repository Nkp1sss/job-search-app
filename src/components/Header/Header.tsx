import './Header.scss';

import { NavLink } from 'react-router-dom';
import { Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import logo from '../../assets/images/logo.svg';

function Header() {
  const mediaQuery = useMediaQuery('(max-width: 612px)');

  return (
    <header className="header">
      <div className="container">
        {!mediaQuery && (
          <div className="logo">
            <Image src={logo} alt="logo" />
            <Text fw={600} size={24} className="logo__text">
              Jobored
            </Text>
          </div>
        )}
        <nav className="header__nav nav">
          <NavLink to="/">Поиск Вакансий</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
