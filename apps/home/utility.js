const getImageBaseUrl = function () {
  let env = { prouction: false };
  if (env.production) {
    return 'http://someurl.com/assets/';
  } else {
    return 'http://localhost:4205/';
  }
};

const imageLoader = ({ src }) => {
  return `${getImageBaseUrl()}/${src}`;
};

export { imageLoader };
