// import { useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import AfterLogin from './components/afterLogin';
import Home from './components/home';
import "./components/common.css"

// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;

function App({ contract, currentUser, nearConfig, wallet }) {
  function signIn() {
    wallet.requestSignIn(
      {
        contractId: nearConfig.contractName,
        // [contract.allProjects, contract.registerUSER, contract.getUsers, contract.getProjects, contract.allProjects, contract.projects, contract.addProject, contract.donate]
        methodNames: [contract.registerUSER, contract.addProject, contract.donate]
      }, //contract requesting access
      'OPEN FUNDS', //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  console.log(currentUser);

  return (
    <div className={`App ${currentUser === undefined ? "center" : ""}`} >
      <h1 className='heading'>Welcome to open funds</h1>
      {currentUser
        ? <button onClick={signOut} className="BTN">Log out</button>
        : <button onClick={signIn} className="BTN">Log in</button>
      }
      {currentUser
        ? <AfterLogin contract={contract} currentUser={currentUser} />
        : <Home />
      }

    </div>
  );
}

App.propTypes = {
  // contract: PropTypes.shape({
  //   allProjects: PropTypes.array.isRequired
  // }).isRequired,

  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),

  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,

  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;
