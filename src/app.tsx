import React from 'react';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      Destroy the world
      <button onClick={props.setAuth}></button>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  setAuth: () => dispatch({
    type: 'SET_AUTH'
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);