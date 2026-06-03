
export const useIAP = () => ({
  connected: false,
  products: [],
  fetchProducts: () => {},
  requestPurchase: () => {},
  currentPurchase: null,
  finishTransaction: () => {},
});
