import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Row, Layout } from 'antd';
import MainPage from './pages/MainPage';
import { connect } from 'react-redux'
import PrivateRoute from './components/routes/PrivateRoute';
import { Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';


class App extends React.Component {
  render() {
    const role = this.props.user.role
    console.log(role)
    return (
      <>
        <Navbar/>
        <Switch>
          <PrivateRoute  role={role}/>
        </Switch>
        {/* <MainPage/> */}
        {/* <LoginPage/> */}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)
