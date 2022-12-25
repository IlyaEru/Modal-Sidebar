import { createContext, useState } from 'react';
import Main from './pages/Main/Main';

export const ShowedComponentsContext = createContext(null) as any;

export interface ShowedComponentsContextType {
  showedComponents: {
    modal: boolean;
    sidebar: boolean;
  };
  setShowedComponents: React.Dispatch<
    React.SetStateAction<{
      modal: boolean;
      sidebar: boolean;
    }>
  >;
}

function App() {
  const [showedComponents, setShowedComponents] = useState({
    modal: false,
    sidebar: false,
  });

  return (
    <>
      <ShowedComponentsContext.Provider
        value={{ showedComponents, setShowedComponents }}
      >
        <Main />
      </ShowedComponentsContext.Provider>
    </>
  );
}

export default App;
