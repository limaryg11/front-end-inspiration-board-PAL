import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';

function App() {

  const [boards, setBoards] = useState([])

  const API = "https://inspiration-board-pal-backend.onrender.com/boards"

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
      <NewBoardForm addBoard={postBoard} />

    
    </div>
  );
}

export default App;
