import React, { createContext } from 'react';
import UserProfile from "./components/UserProfile"
import CompC from './components/CompC';

import { StateProvider } from './context/Context';
import Page1 from './Page1';
import Page2 from './Page2';

export const UserContext = React.createContext()

export default function App(){
    return(
        <div>
            hello
            <UserProfile/>
            <UserContext.Provider value={'Hello world'}>
              <CompC/>
            </UserContext.Provider>
            <StateProvider>
      <Page1 />
      <Page2 />
    </StateProvider>
        </div>
    )
}