import React, { useState } from "react";
import Web3 from "web3";
import { useBalance, useContractWrite, useAccount } from "wagmi";
import wagmigotchiABI from "../../../abierc20.json";
import { parseEther } from "viem";

function TransferFunds() {
    const account = useAccount();
    const [toAddress, setToAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [errorAddress, setErrorAddress] = useState("");
    const [errorAmount, setErrorAmount] = useState("");
    const balanceObj = useBalance({
        address: account.address,
        token: "0x9ba4a496730618b21103808b03d29e34832cdf5a",
    });

    const { formatted: balance } = balanceObj.data as any;

    const { write } = useContractWrite({
        address: "0x9ba4a496730618b21103808b03d29e34832cdf5a",
        abi: wagmigotchiABI,
        functionName: "transfer",
        args: [toAddress, parseEther(amount)],
    });
    const handleTransfer = async () => {
        try {
            write();
        } catch (error) {
            console.error("Lỗi khi chuyển tiền:", error);
        }
    };
    let isButtonDisabled;
    if (
        Web3.utils.isAddress(toAddress) &&
        amount !== "" &&
        parseFloat(amount) > 0 &&
        Number(amount) <= Number(balance)
    ) {
        isButtonDisabled = false;
    } else {
        isButtonDisabled = true;
    }
    const setMax = () => {
        setAmount(balance ? balance.toString() : "");
    };

    return (
        <div className="transaction-coin">
            <h2>Transaction</h2>
            <label>Address</label>
            <input
                type="text"
                className="input-address"
                // value={address}
                onChange={(e) => {
                    setToAddress(e.target.value);
                    if (!Web3.utils.isAddress(e.target.value)) {
                        setErrorAddress("Address is validate");
                    } else {
                        setErrorAddress("");
                    }
                }}
            />
            <br />
            <span className="error">{errorAddress}</span>
            <br />
            <label className="amount">Amount</label>
            <input
                type="text"
                className="input-amount"
                value={amount}
                placeholder="0.0"
                onChange={(e) => {
                    setAmount(e.target.value);
                    if (
                        !isNaN(Number(e.target.value)) &&
                        parseFloat(e.target.value) >= 0 &&
                        Number(e.target.value) <= Number(balance)
                    ) {
                        setErrorAmount("");
                    } else {
                        setErrorAmount("Amout is validate");
                    }
                }}
            />
            <br />
            <span className="error">{errorAmount}</span>
            <button onClick={setMax} className="btn-max-coin">
                Max
            </button>
            <br />
            <button
                onClick={handleTransfer}
                disabled={isButtonDisabled}
                className="btn-tranfer"
            >
                Tranfer
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-coin"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
            </button>

            <br />
        </div>
    );
}

export default TransferFunds;
