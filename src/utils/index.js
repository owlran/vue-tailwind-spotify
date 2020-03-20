const getHashParams = () => {
  const hashParams = {};
  let e;
  const r = /([^/?&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) { // eslint-disable-line
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export default getHashParams;
