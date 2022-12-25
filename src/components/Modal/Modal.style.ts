import styled from 'styled-components';

export const StyledModalContainer = styled.aside`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  flex: 1;
  margin: 0 3rem;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.darkRed};
`;
