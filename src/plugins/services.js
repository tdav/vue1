export const array = (array) => (Array.isArray(array) ? array : []);
export const replaceArray = (arr1, arr2) => {
  arr1?.splice(0);
  arr1.push(...array(arr2));
};

export const getAssetImg = (path) => {
  try {
    return path ? require(`../assets/img/${path}`) : undefined;
  } catch (error) {
    console.error(`Error loading image: ${path}`, error);
    return undefined;
  }
};