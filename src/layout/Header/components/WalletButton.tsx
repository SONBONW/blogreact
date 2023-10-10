"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import BalanceCoin from "../../../configs/BalanceCoin";

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
                        LgIn
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            " (connecting)"}
                    </button>
                ))
            ) : (
                <div className="wallet-disconnect-button">
                    <button onClick={() => disconnect()}> LgOt</button>
                    <BalanceCoin walletAddress={address} />
                </div>
            )}
        </div>
    );
};

export default ConnectWallet;
