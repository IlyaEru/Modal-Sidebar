import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  ShowedComponentsContext,
  ShowedComponentsContextType,
} from '../../App';
import {
  StyledSideBarCloseButton,
  StyledSideBarContainer,
  StyledSideBarFooter,
  StyledSideBarFooterList,
  StyledSideBarFooterListItem,
  StyledSideBarHeader,
  StyledSideBarList,
  StyledSideBarListItem,
  StyledSideBarNav,
} from './SideBar.style';
import logo from '../../assets/logo.svg';

import { navLinks, footerLinks } from './SideBar.constants';

export default function SideBar() {
  const { showedComponents, setShowedComponents } =
    useContext<ShowedComponentsContextType>(ShowedComponentsContext);

  const handleCloseSideBar = () => {
    setShowedComponents((prev) => ({ ...prev, sidebar: false }));
  };

  return (
    <StyledSideBarContainer className={showedComponents.sidebar ? 'open' : ''}>
      <StyledSideBarHeader>
        <img src={logo} alt="logo" />
        <StyledSideBarCloseButton onClick={handleCloseSideBar}>
          <IoMdClose />
        </StyledSideBarCloseButton>
      </StyledSideBarHeader>
      <StyledSideBarNav>
        <StyledSideBarList>
          {navLinks.map((link) => {
            const { id, to, text, icon } = link;
            return (
              <StyledSideBarListItem key={id}>
                <a href={to}>
                  {icon}
                  {text}
                </a>
              </StyledSideBarListItem>
            );
          })}
        </StyledSideBarList>
      </StyledSideBarNav>
      <StyledSideBarFooter>
        <StyledSideBarFooterList>
          {footerLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <StyledSideBarFooterListItem key={id}>
                <a href={href}>{icon}</a>
              </StyledSideBarFooterListItem>
            );
          })}
        </StyledSideBarFooterList>
      </StyledSideBarFooter>
    </StyledSideBarContainer>
  );
}
