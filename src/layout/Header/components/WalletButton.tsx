"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import BalanceCoin from "../../../configs/BalanceCoin";
import { Link } from "react-router-dom";

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
                        LgIn
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            " (connecting)"}
                    </button>
                ))
            ) : (
                <>
                    <div className="wallet-disconnect-button">
                        <button onClick={() => disconnect()}> LgOt</button>
                        <BalanceCoin />
                    </div>
                    <button className="link-btn-transaction">
                        <Link to="/transfer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="white"
                                className="bi bi-send-check"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                            </svg>
                        </Link>
                    </button>
                </>
            )}
        </div>
    );
};

export default ConnectWallet;
