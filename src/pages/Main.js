import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import './WalletCard.css'
import Home from "./Home";
import { Link } from 'react-router-dom';

const Main = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setConnButtonText('Wallet Connected');
          setDefaultAccount(result[0]);
        })
        .catch(error => {
          setErrorMessage(error.message);
        });

    } else if (!window.ethereum) {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  }

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount)
        .then(balanceResult => {
          setUserBalance(ethers.utils.formatEther(balanceResult));
        })
    };
  }, [defaultAccount]);
 
  return (
    // <div className='walletCard'>
    //   <h4> Connect MetaMask Wallet </h4>
    //   <button onClick={connectWalletHandler}>{connButtonText}</button>
    //   <div className='accountDisplay'>
    //     <h3>Address: {defaultAccount}</h3>
    //   </div>
    //   <div className='balanceDisplay'>
    //     { userBalance == 0 ? <span>Deposit In Your Accout</span> : <h1></h1> } 
    //     { userBalance == 0.00001 ? <a href='/Home'>Go to the website</a> : <h1></h1> } 
    //   </div>
    //   {errorMessage}
    // </div>

    <div className='walletCard'>
      <div className='walletCards'>
        <h4 className='headingC'> Connect MetaMask Wallet </h4>
        <button className='walletBtn' onClick={connectWalletHandler}>{connButtonText}</button>
        <div className='accountDisplay'>
          <h3>Address: {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
          {/* {userBalance == 0 ? <span className='walletInner'>Deposit Tokens In your Account</span> : <h1></h1>} */}

        </div>
      </div>
      {userBalance >= 0.00001 ? <Link to="/home">
        <h1>Go to The Website Home</h1>
      </Link> : <h1>You need to hold BLOCK-E to access the application</h1>}

      {errorMessage}
    </div>
  );
}

export default Main;