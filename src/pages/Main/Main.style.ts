import styled from 'styled-components';
import { StyledButton } from '../../style/globalStyle';

export const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledShowModalButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.black};

  :hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledShowSidebarButton = styled.button`
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.9);
    }
  }
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  animation: pulse 2.5s infinite;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 2rem;
  }
`;
