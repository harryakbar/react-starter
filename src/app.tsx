import * as React from 'react';
import { connect } from 'react-redux';

function App(props: any) {
  return (
    <div>
      Destroy the world
      <button onClick={props.setAuth}></button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: any) => ({
  setAuth: () => dispatch({
    type: 'SET_AUTH'
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);