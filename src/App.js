import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import CardList from './components/CardList';

function App() {

  const API = "https://inspiration-board-pal-backend.onrender.com/boards"

  const [boards, setBoards] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({
    title:'',
    owner:'',
    board_id: null
  });

  const selectBoard = (board) => {setSelectedBoard(board)};


  const getAllBoards = () => {
    axios
    .get(API)
    .then((result) => {
      setBoards(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const postBoard = (newBoardData) => {
    axios
    .post(API, newBoardData)
    .then((result) => {
      console.log(result.data);
      getAllBoards();
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section>
        <BoardList data={boards} selectBoard={selectBoard} />
      </section>

      <section>
        <h2>Selected Boards</h2>
        <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>
        <p>{selectedBoard.title}-{selectedBoard.owner}</p>
      </section>
      <section>
        <h2>Create A New Board</h2>
        <NewBoardForm addBoard={postBoard} />
      </section>

      {selectedBoard.board_id ? <CardList board={selectedBoard} /> : '' } 
    </div>
  );
}

export default App;
