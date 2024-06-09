export const extractNumFromDeviceToken = (token: string): number => {
  return parseInt(token.split(' ').pop()?.split('px').shift() ?? '0');
};
