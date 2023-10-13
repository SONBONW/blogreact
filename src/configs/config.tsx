import {
    createConfig,
    configureChains,
    WagmiConfig,
    // useConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { bscTestnet } from "viem/chains";
import React from "react";

// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { publicClient, webSocketPublicClient, chains } = configureChains(
    [bscTestnet],
    [(alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider())],
);

// Set up wagmi config
const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({
            chains: chains,
            options: {
                shimDisconnect: true,
                UNSTABLE_shimOnConnectSelectAccount: true,
            },
        }),
        // new CoinbaseWalletConnector({
        //     chains: [],
        //     options: {
        //         appName: "wagmi",
        //     },
        // }),
        // new WalletConnectConnector({
        //     chains: [],
        //     options: {
        //         projectId: "...",
        //     },
        // }),
        // new InjectedConnector({
        //     chains: [],
        //     options: {
        //         name: "Injected",
        //         shimDisconnect: true,
        //     },
        // }),
    ],
    publicClient,
    webSocketPublicClient,
});

const Profile = ({ children }: any) => {
    return <WagmiConfig config={config}> {children} </WagmiConfig>;
};

export default Profile;
