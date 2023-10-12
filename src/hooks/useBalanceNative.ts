import { useEffect } from "react";
import { useAccount, useBalance } from "wagmi";

export function useBalanceNative() {
    const { address } = useAccount();

    const { data, error } = useBalance({
        address: address,
    });

    useEffect(() => {
        if (error) {
            console.error("Lỗi khi lấy balance:", error);
        }
    }, [error]);
    return { balance: data?.formatted, symbol: data?.symbol };
}
