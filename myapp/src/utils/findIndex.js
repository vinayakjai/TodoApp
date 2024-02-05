function findIndex(items, key) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id == key) {
      return i;
    }
  }
}

export default findIndex;
