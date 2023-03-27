export const info = [
  {
    price: "500.600 USD",
    usdPrice: "$ 500.600",
    floorDifference: "11% below",
    expiration: "7 days",
    from: "8CCD36",
  },
  {
    price: "500.600 USD",
    usdPrice: "$ 500.600",
    floorDifference: "11% below",
    expiration: "7 days",
    from: "8CCD36",
  },
  {
    price: "500.600 USD",
    usdPrice: "$ 500.600",
    floorDifference: "11% below",
    expiration: "7 days",
    from: "8CCD36",
  },
  {
    price: "500.600 USD",
    usdPrice: "$ 500.600",
    floorDifference: "11% below",
    expiration: "7 days",
    from: "8CCD36",
  },
  {
    price: "500.600 USD",
    usdPrice: "$ 500.600",
    floorDifference: "11% below",
    expiration: "7 days",
    from: "8CCD36",
  },
];

export const column = [
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "USD Price",
    accessor: "usdPrice",
  },
  {
    Header: "Floor Difference",
    accessor: "floorDifference",
  },
  {
    Header: "Expiration",
    accessor: "expiration",
  },
  {
    Header: "From",
    accessor: "from",
  },
];

export function dataReducer(data) {
  return data.map((offer) => {
    return { price: offer.price, usdPrice: offer.usdPrice };
  });
}

export function columnsReducer(columns) {
  return columns.slice(0, 2);
}
