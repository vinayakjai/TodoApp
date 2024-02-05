function checkValidIdea(idea) {
  let count = 0;
  if (idea.length == 0) {
    return false;
  }
  for (let i = 0; i < idea.length; i++) {
    if (idea[i] == " ") {
      count++;
    }
  }
  if (count == idea.length) {
    return false;
  }
  return true;
}
export default checkValidIdea;
