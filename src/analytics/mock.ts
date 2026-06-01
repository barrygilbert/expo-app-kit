type Noop = (...args: any[]) => Promise<any>;

const noop = (funcName: string): Noop => (...args) => {
  console.log(`Called analytics.${funcName} with args:`, args);
  return Promise.resolve();
};

const analyticFunctions = [
  'getAppInstanceId',
  'getSessionId',
  'initiateOnDeviceConversionMeasurementWithEmailAddress',
  'initiateOnDeviceConversionMeasurementWithPhoneNumber',
  'logAddPaymentInfo',
  'logAddShippingInfo',
  'logAddToCart',
  'logAddToWishlist',
  'logAppOpen',
  'logBeginCheckout',
  'logCampaignDetails',
  'logEarnVirtualCurrency',
  'logEvent',
  'logGenerateLead',
  'logJoinGroup',
  'logLevelEnd',
  'logLevelStart',
  'logLevelUp',
  'logLogin',
  'logPostScore',
  'logPurchase',
  'logRefund',
  'logRemoveFromCart',
  'logScreenView',
  'logSearch',
  'logSelectContent',
  'logSelectItem',
  'logSelectPromotion',
  'logSetCheckoutOption',
  'logShare',
  'logSignUp',
  'logSpendVirtualCurrency',
  'logTutorialBegin',
  'logTutorialComplete',
  'logUnlockAchievement',
  'logViewCart',
  'logViewItem',
  'logViewItemList',
  'logViewPromotion',
  'logViewSearchResults',
  'resetAnalyticsData',
  'setAnalyticsCollectionEnabled',
  'setDefaultEventParameters',
  'setSessionTimeoutDuration',
  'setUserId',
  'setUserProperties',
  'setUserProperty',
];

const mockAnalyticsResult = analyticFunctions.reduce<Record<string, Noop>>((mock, funcName) => {
  mock[funcName] = noop(funcName);
  return mock;
}, {});

const mockAnalytics = () => mockAnalyticsResult;

export default mockAnalytics;
