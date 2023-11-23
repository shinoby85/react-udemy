import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let editablePlayerName = isEditing ? (<input type="text" required value={playerName} onChange={handleChange}/>) : (
    <span className="player-name">{playerName}</span>);

  function handleChange(ev) {
    setPlayerName(ev.target.value)
  }

  function handleEditClick() {
    setIsEditing(editing => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (<li className={isActive ? 'active' : null}>
       <span className="player">
         {editablePlayerName}
         <span className="player-symbol">{symbol}</span>
       </span>
    <button onClick={() => handleEditClick()}>{!isEditing ? 'Edit' : 'Save'}</button>
  </li>);
}