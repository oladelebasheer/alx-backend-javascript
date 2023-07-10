export default function appendToEachArrayValue(array, appendString) {
  const idx  = array;
  for (const i of array) {
    const value = array.indexOf(i);
    aux[value] = `${appendString}${i}`;
  }

  return idx;
}
