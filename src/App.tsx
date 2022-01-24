import './App.css';
import { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';
import Navbarmintnft from './navbar/navbar';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import Homemaincontent from './homecon/homecon';
import Faqspanda from './faqs/faqs';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!,
    );

    return candyMachineId;
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <div className='app-main-all-of-components'>
      <Navbarmintnft />
      <Homemaincontent />
      <div className='card app-main-component-card-main' style={{ marginRight: '50px', marginLeft: '50px', }}>
        <div className='card-body'>
          <p className='fs-2 fw-bold text-center'>Mint Now</p>
          <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletDialogProvider>
                  <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeoutInMilliseconds}
                    rpcHost={rpcHost}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider>
        </div>
      </div>
      <Faqspanda />
    </div>
  );
};

export default App;
