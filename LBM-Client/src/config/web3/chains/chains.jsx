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

export const BinanceTestNet = {
  id: 97,
  name: "Binance Testnet",
  network: "Smart Chain - Testnet",
  iconUrl: "./icons/Binance_Logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Coin",
    symbol: "BNB",
  },
  rpcUrls: {
    default: {
      http: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    },
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
  },
  testnet: true,
};

export const avalancheChain = {
  id: 43_114,
  name: "Avalanche",
  network: "avalanche",
  iconUrl: "./icons/Avalanche_logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax.network/ext/bc/C/rpc"],
    },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://snowtrace.io" },
    etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
  },
  testnet: false,
};

