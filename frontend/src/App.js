import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import PrivateRoute from './components/routes/PrivateRoute';
import { Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    const role = this.props.user.role
    console.log(role)
    return (
      <>
        <Switch>
          <PrivateRoute  role={role}/>
        </Switch>
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
