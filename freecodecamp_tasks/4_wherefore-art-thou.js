function whatIsInAName(collection, source) {
  let sourceProps = Object.keys(source);
    
  return collection.filter( obj => {

    for (let i = 0; i < sourceProps.length; i++) {
      if (
        !obj.hasOwnProperty(sourceProps[i]) ||
        obj[sourceProps[i]] !== source[sourceProps[i]]
      ) {
        return false;
      }
    };

    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);