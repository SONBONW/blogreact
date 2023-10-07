"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const ConnectWallet = () => {
    const { connect, connectors, isLoading, pendingConnector } = useConnect();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    return (
        <div className="wallet-connect-button">
            {!isConnected ? (
                connectors.map((connector) => (
                    <button
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                    >
                        Connect
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            " (connecting)"}
                    </button>
                ))
            ) : (
                <div className="wallet-disconnect-button">
                    <button onClick={() => disconnect()}> LogOut</button>
                </div>
            )}
        </div>
    );
};

export default ConnectWallet;
