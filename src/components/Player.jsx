import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedName, setName] = useState(name);
  return (
    <li>
      <span id="player">
        {!isEditing ? <span className="player-name">{changedName}</span> : null}
        {isEditing ? (
          <input
            id="player-input"
            type="text"
            value={changedName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        ) : null}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing((editing) => !editing);
          console.log(isEditing);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
