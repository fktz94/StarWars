export default function getUrlToLinkTo(url) {
  if (url) return url.split('api').slice(-1).toString();
  return false;
}
