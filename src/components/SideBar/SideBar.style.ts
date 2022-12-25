import styled from 'styled-components';

export const StyledSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 0;
  &.open {
    max-width: 100%;
  }
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
  transition: max-width 0.5s ease-in-out;

  background: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    &.open {
      max-width: 20rem;
    }
  }
`;

export const StyledSideBarCloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.darkRed};
`;

export const StyledSideBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const StyledSideBarNav = styled.nav``;

export const StyledSideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledSideBarListItem = styled.li`
  padding: 1rem 1.5rem;

  transition: background-color 0.3s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryDarkBlue};
    white-space: nowrap;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    a {
      font-size: 1.2rem;
    }
  }
`;

export const StyledSideBarFooter = styled.footer`
  margin-top: auto;
  margin-bottom: 2rem;
`;

export const StyledSideBarFooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StyledSideBarFooterListItem = styled.li`
  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.blueStage1};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.blueStage2};
    }
    :active {
      color: ${({ theme }) => theme.colors.blueStage3};
    }
  }
`;
