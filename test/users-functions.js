export { getUserFromId }


function getUserFromId (num, array) {
  return array.find((array) => array.id === num);
};
