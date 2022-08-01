import React from 'react';
import {DataProvider} from './context/Data';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ProfileImage from './components/ProfileImage/ProfileImage';
import './App.css';

function App() {

  return (<>
    <DataProvider>
      <Header />
      <Main />
      <ProfileImage/>
    </DataProvider>
  </>);
}

export default App;
