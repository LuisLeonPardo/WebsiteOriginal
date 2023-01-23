export const AstarNetworkChain = {
  id: 592,
  name: "Astar",
  network: "Astar Network",
  iconUrl: "./icons/astar-logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "ASTAR",
    symbol: "ASTR",
  },
  rpcUrls: {
    default: {
      http: ["https://evm.astar.network", "https://astar.public.blastapi.io"],
    },
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://astar.subscan.io" },
    etherscan: {
      name: "PolkadotJs",
      url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer",
    },
  },
  testnet: false,
};

export const BinanceSmartChain = {
  id: 56,
  name: "Binance Smart Chain Mainnet",
  network: "Binance Smart Chain",
  iconUrl: "./icons/Binance_Logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Coin",
    symbol: "BNB",
  },
  rpcUrls: {
    default: {
      http: [
        "https://endpoints.omniatech.io/v1/bsc/mainnet/public",
        "https://bsc-dataseed.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed3.binance.org",
      ],
    },
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
  },
  testnet: false,
};
