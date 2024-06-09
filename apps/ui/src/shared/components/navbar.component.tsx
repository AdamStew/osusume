import { AppHeader, Button, Divider, Flex, Heading, Menu } from '@dynatrace/strato-components-preview';
import { BoxShadows, Colors } from '@dynatrace/strato-design-tokens';
import { DescriptionIcon, LogoutIcon, MagnifyingGlassIcon, MenuIcon, SourceIcon } from '@dynatrace/strato-icons';
import React, { useContext } from 'react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { DeviceContext } from '../contexts/device.context';

const StyledHeaderBar = styled.div`
  border: ${Colors.Border.Neutral.Default};
  background: ${Colors.Background.Surface.Default};
  box-shadow: ${BoxShadows.Surface.Raised.Rest};
  padding: 0.5rem 2rem;
`;

interface NavItem {
  title: string;
  icon: ReactElement;
  path?: string;
  url?: string;
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const device = useContext(DeviceContext);
  const navItemStyle = device.resize
    ? { width: '-webkit-fill-available' }
    : { minWidth: '50px', justifyContent: 'center' };

  const onClick = (url: string) => {
    if (url.toLowerCase().includes('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  const enableMenus = false;

  const menus: { section: string; items: NavItem[] }[] = [
    {
      section: 'Search',
      items: [
        {
          title: 'Search',
          path: '/search-form',
          icon: <MagnifyingGlassIcon />,
        },
      ],
    },
    {
      section: 'Info',
      items: [
        { title: 'Release notes', url: 'https://google.com', icon: <DescriptionIcon /> },
        { title: 'Documentation', url: 'https://google.com', icon: <SourceIcon /> },
      ],
    },
  ];

  return (
    <StyledHeaderBar>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex onClick={onClick.bind(this, '/')}>
          <Heading level={1}>おすすめ</Heading>
          <Divider orientation="vertical" />
          <AppHeader.NavItem
            isSelected={location.pathname.startsWith('/genre-recommendations')}
            as={RouterLink}
            to="genre-recommendations"
            style={navItemStyle}
          >
            Genre Recommendations
          </AppHeader.NavItem>
        </Flex>
        {enableMenus && (
          <Flex alignItems="center">
            <Menu defaultOpen={false}>
              <Menu.Trigger>
                <Button variant="emphasized">
                  <Button.Prefix>
                    <MenuIcon />
                  </Button.Prefix>
                  Menu
                </Button>
              </Menu.Trigger>
              <Menu.Content alignment="end">
                {menus.map((menu, index) => (
                  <React.Fragment key={menu.section + index}>
                    <Menu.Label key={menu.section}>{menu.section}</Menu.Label>
                    <Menu.Group key={menu.section + index}>
                      {menu.items
                        .filter((menuItem) => menuItem?.path !== location.pathname)
                        .map((menuItem, menuItemIndex) => {
                          const endpoint = menuItem.path ?? menuItem.url ?? '';

                          return (
                            <Menu.Item key={menuItem.title + menuItemIndex} onSelect={onClick.bind(this, endpoint)}>
                              <Menu.ItemIcon>{menuItem.icon}</Menu.ItemIcon>
                              {menuItem.title}
                            </Menu.Item>
                          );
                        })}
                    </Menu.Group>
                  </React.Fragment>
                ))}
                <Menu.Item key="logout" onSelect={onClick.bind(this, '/logout')}>
                  <Menu.ItemIcon>
                    <LogoutIcon />
                  </Menu.ItemIcon>{' '}
                  Logout
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </Flex>
        )}
      </Flex>
    </StyledHeaderBar>
  );
};

export default Navbar;
