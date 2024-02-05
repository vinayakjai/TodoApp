import { useState } from "react";

function Idea(ideaInfo) {
  let [isEditing, setIsEditing] = useState(false);
  let [idea, setIdea] = useState(ideaInfo.idea);

  let ideaContainerStyle = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "10px",
  };

  return (
    <>
      <div style={ideaContainerStyle}>
        {isEditing ? (
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="edit your idea here"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              save
            </button>
          </div>
        ) : (
          <p>{idea}</p>
        )}
        <button onClick={() => ideaInfo.delete()}>delete idea</button>
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            ideaInfo.edit(idea);
          }}
        >
          edit Idea
        </button>
      </div>
    </>
  );
}

export default Idea;
