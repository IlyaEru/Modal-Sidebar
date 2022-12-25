import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  ShowedComponentsContext,
  ShowedComponentsContextType,
} from '../../App';

import {
  StyledModalCloseButton,
  StyledModalContainer,
  StyledModalContent,
} from './Modal.style';

export default function Modal() {
  const { setShowedComponents } = useContext<ShowedComponentsContextType>(
    ShowedComponentsContext,
  );

  const handleCloseModal = () => {
    setShowedComponents((prev) => ({ ...prev, modal: false }));
  };

  return (
    <StyledModalContainer>
      <StyledModalContent>
        <StyledModalCloseButton onClick={handleCloseModal}>
          <IoMdClose />
        </StyledModalCloseButton>
        <h1>Modal Content</h1>
      </StyledModalContent>
    </StyledModalContainer>
  );
}
