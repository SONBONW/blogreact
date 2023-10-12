import React from "react";
import { useBalanceNative } from "../hooks/useBalanceNative";

function BalanceCoin() {
    const { balance, symbol } = useBalanceNative();

    return (
        <div className="coin">
            {balance !== null ? (
                <p>
                    {balance} {symbol}
                </p>
            ) : (
                <p>Đang tải balance...</p>
            )}
        </div>
    );
}

export default BalanceCoin;
