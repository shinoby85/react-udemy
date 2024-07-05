import {createContext} from "react";

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {
  },
  hideCart: () => {
  },
  showCheckout: () => {
  }
  hideCheckout: () => {
  }
});

export function UserProgressContextProvider({children}) {
  
  return <UserProgressContext.Provider value={{children}}>
    {children}
  </UserProgressContext.Provider>;
  
}

export default UserProgressContext;