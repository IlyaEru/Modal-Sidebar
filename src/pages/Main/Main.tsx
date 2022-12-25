import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  ShowedComponentsContext,
  ShowedComponentsContextType,
} from '../../App';
import Modal from '../../components/Modal/Modal';
import SideBar from '../../components/SideBar/SideBar';
import {
  StyledMainContainer,
  StyledShowModalButton,
  StyledShowSidebarButton,
} from './Main.style';

export default function Main() {
  const { showedComponents, setShowedComponents } =
    useContext<ShowedComponentsContextType>(ShowedComponentsContext);

  const handleShowModal = () => {
    setShowedComponents({ ...showedComponents, modal: true });
  };

  const handleShowSidebar = () => {
    setShowedComponents({ ...showedComponents, sidebar: true });
  };
  return (
    <StyledMainContainer>
      <StyledShowSidebarButton onClick={handleShowSidebar}>
        <GiHamburgerMenu />
      </StyledShowSidebarButton>
      <StyledShowModalButton onClick={handleShowModal}>
        Show modal
      </StyledShowModalButton>
      {showedComponents.modal && <Modal />}
      <SideBar />
    </StyledMainContainer>
  );
}
