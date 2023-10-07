import {
    createConfig,
    configureChains,
    mainnet,
    WagmiConfig,
    // useConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { polygon } from "viem/chains";
import React from "react";

// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    // [publicProvider()],
    [(alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider())],
);

// Set up wagmi config
const config = createConfig({
    autoConnect: false,
    connectors: [
        new MetaMaskConnector({
            chains: [mainnet, polygon],
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
