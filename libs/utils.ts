export const randomString = (len = 8): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array(len)
    .fill(0)
    .map(() => charset.charAt(Math.floor(Math.random() * charset.length)))
    .join('');
};
