import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const gameBoardInit = [[null, null, null], [null, null, null], [null, null, null]];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let board = [...gameBoardInit.map(array => [...array])];

  gameTurns.forEach(({square, player}) => {
    const {row, col} = square;
    board[row][col] = player;
  });

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination = board[combination[0].row][combination[0].column];
    const secondCombination = board[combination[1].row][combination[1].column];
    const thirdCombination = board[combination[2].row][combination[2].column];
    if (firstCombination && firstCombination === secondCombination && firstCombination === thirdCombination) {
      winner = players[firstCombination];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updateTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ];
      return updateTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(oldPlayer => ({
      ...oldPlayer,
      [symbol]: newName
    }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}
                  onChangeName={handlePlayerNameChange}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}
                  onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={board}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
