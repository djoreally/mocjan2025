import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false,
};

export const initFacebookPixel = () => {
  ReactPixel.init('329053198839981', null, options);
  ReactPixel.pageView(); // Track initial page view
};

export const trackFacebookEvent = (event, data) => {
  ReactPixel.track(event, data);
};
