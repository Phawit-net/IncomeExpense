import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Row, Layout } from 'antd';
import MainPage from './pages/MainPage';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <MainPage/>
      </>
    )
  }
}

export default App;
