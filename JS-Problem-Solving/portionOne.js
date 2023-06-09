/*====================================
        Problem Solving - 01
====================================*/
function secondSymbol(s, symbol) {
  const fIndex = s.indexOf(symbol);

  if (fIndex === -1) {
    return -1;
  }

  // indexOf(indexValue)
  // indexOf(indexValue, fromWhereStartAgain)

  const sIndex = s.indexOf(symbol, fIndex + 1);

  if (sIndex === -1) {
    return -1;
  }

  return sIndex;
}

console.log(secondSymbol("Mongol", "o"));
