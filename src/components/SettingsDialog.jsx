import styles from './SettingsDialog.module.css';
import {useState} from "react";

export default function SettingsDialog({onSettings}) {
  const [opponents, setOpponents] = useState('Player');
  const [gamesToWin, setGamesToWin] = useState(3);
  const [themId, setThemId] = useState(1);

  function handlerOpponentsChanged(e) {
    setOpponents(e.target.value);
  }

  function handlerSaveSettings() {
    /* Аналогично
    onSettings({
      opponents: opponents,
      gamesToWin: gamesToWin,
      themId: themId
    });
    */
    onSettings({
      opponents,
      gamesToWin,
      themId
    });
  }

  return (
    <div id="settings-dialog" className={`${styles.settings_wrapper} ${styles.settings}`}>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="player"
              value='Player'
              checked={opponents === 'Player'}
              onChange={handlerOpponentsChanged}
            />
            Player
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="player"
              value='Computer'
              checked={opponents === 'Computer'}
              onChange={handlerOpponentsChanged}
            />
            Computer
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="player"
              value='Computer1'
              checked={opponents === 'Computer1'}
              onChange={handlerOpponentsChanged}
            />
            Computer1
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="player"
              value='Computer2'
              checked={opponents === 'Computer2'}
              onChange={handlerOpponentsChanged}
            />
            Computer2
          </label>
        </li>
      </ul>

      <button onClick={handlerSaveSettings}>Save settings</button>

    </div>
  )
}