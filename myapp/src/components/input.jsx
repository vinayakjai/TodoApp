import { useState } from "react";
import checkValidIdea from "../utils/checkValidIdea";

import Idea from "./Idea";
import findIndex from "../utils/findIndex";

function AddIdea() {
  let [ideas, setIdeas] = useState([]);
  let [input, setInput] = useState("");

  function submitIdea() {
    let isValid = checkValidIdea(input);

    if (!isValid) {
      alert("please enter valid idea");
      return;
    }

    setIdeas([
      ...ideas,
      { content: input, id: Math.abs(Math.floor(Math.random() * 10)) },
    ]);
    setInput("");
  }

  function deleteIdea(keyOfIdea) {
    const indexToDelete = findIndex(ideas, keyOfIdea);

    ideas.splice(indexToDelete, 1);
    setIdeas([...ideas]);
  }

  function editIdea(updatedValue, key) {
    let indexOfUpdatedIdea = findIndex(ideas, key);
    ideas[indexOfUpdatedIdea] = { content: updatedValue, id: key };
    setIdeas(ideas);
  }

  return (
    <>
      <input
        type="text"
        placeholder="enter your ideas"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={submitIdea}>add</button>
      {ideas.length == 0 ? (
        <p>No ideas added yet</p>
      ) : (
        ideas.map((idea) => {
          return (
            <Idea
              key={idea.id}
              idea={idea.content}
              delete={() => deleteIdea(idea.id)}
              edit={() => editIdea(idea.id)}
            />
          );
        })
      )}
    </>
  );
}

export default AddIdea;
