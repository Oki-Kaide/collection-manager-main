import { Anchor } from 'ual-anchor';
import { WebAuth } from '@proton/ual-webauth';

export default {
  proton: {
    name: 'Proton',
    imageUrl: 'https://proton.bloks.io/img/chains/proton.png',
    authenticators: [WebAuth, Anchor],
    aaEndpoint: process.env.NEXT_PUBLIC_PROTON_MAINNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_PROTON_MAINNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_PROTON_MAINNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_PROTON_MAINNET_HOST,
    port: process.env.NEXT_PUBLIC_PROTON_MAINNET_PORT,
  },

  'proton-test': {
    name: 'Proton (Testnet)',
    imageUrl: 'https://proton.bloks.io/img/chains/proton.png',
    authenticators: [WebAuth, Anchor],
    aaEndpoint: process.env.NEXT_PUBLIC_PROTON_TESTNET_AA_ENDPOINT,
    chainId: process.env.NEXT_PUBLIC_PROTON_TESTNET_CHAIN_ID,
    protocol: process.env.NEXT_PUBLIC_PROTON_TESTNET_PROTOCOL,
    host: process.env.NEXT_PUBLIC_PROTON_TESTNET_HOST,
    port: process.env.NEXT_PUBLIC_PROTON_TESTNET_PORT,
  },
};
