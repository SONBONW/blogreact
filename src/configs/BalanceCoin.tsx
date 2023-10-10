import React, { useEffect, useState } from "react";
import Web3 from "web3";

interface Props {
    walletAddress?: `0x${string}`;
}

function BalanceCoin(props: Props) {
    const { walletAddress } = props;
    const [balance, setBalance] = useState<string | null>(null);
    console.log(walletAddress);
    console.log(typeof walletAddress);

    useEffect(() => {
        const address = `${walletAddress}`;

        // Kiểm tra xem 'window.ethereum' có tồn tại và là một đối tượng chứa 'ethereum' không
        if (typeof window !== "undefined" && "ethereum" in window) {
            const web3 = new Web3((window as any).ethereum);

            const getBalance = async () => {
                try {
                    const nativeBalance = await web3.eth.getBalance(address);

                    const etherBalance = web3.utils.fromWei(
                        nativeBalance,
                        "ether",
                    );
                    setBalance(etherBalance);
                } catch (error) {
                    console.error("Lỗi khi lấy balance:", error);
                }
            };

            getBalance();
        } else {
            console.error("Môi trường không hỗ trợ Ethereum provider.");
        }
    }, [walletAddress]);

    return (
        <div className="coin">
            {balance !== null ? (
                <p>{balance} ETH</p>
            ) : (
                <p>Đang tải balance...</p>
            )}
        </div>
    );
}

export default BalanceCoin;
