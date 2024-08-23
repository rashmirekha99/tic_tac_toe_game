import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <span id="player">
        {!isEditing ? <span className="player-name">{name}</span> : null}
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(value) => {
              name = value;
            }}
          ></input>
        ) : null}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          console.log(isEditing);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
