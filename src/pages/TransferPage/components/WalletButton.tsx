"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import BalanceCoin from "../../../configs/BalanceCoin";
import TransactionCoin from "./TransactionCoin";

const ConnectWallet = () => {
    const { connect, connectors, isLoading, pendingConnector } = useConnect({
        chainId: 97,
    });
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    return (
        <div className="wallet-button">
            {!isConnected ? (
                connectors.map((connector) => (
                    <button
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                        className="wallet-connect-button"
                    >
                        Connect Wallet
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            " (connecting)"}
                    </button>
                ))
            ) : (
                <>
                    <div className="wallet-disconnect-button">
                        <BalanceCoin />
                        <button onClick={() => disconnect()}>
                            {" "}
                            Disconnect
                        </button>
                    </div>
                    <TransactionCoin />
                </>
            )}
        </div>
    );
};

export default ConnectWallet;
