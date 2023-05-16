import './Header.scss';
import { Flex, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Flex className="logo" align="center" gap={{ base: 'sm' }}>
          <img src={logo} alt="logo" />
          <Text fw={600} size={24} className="logo__text">
            Jobored
          </Text>
        </Flex>
        <nav className="header__nav nav">
          <NavLink to="/">Поиск Вакансий</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
