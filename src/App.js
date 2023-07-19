import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import CardList from './components/CardList';

function App() {

  const API = "https://inspiration-board-pal-backend.onrender.com/boards"

  // const API = "http://127.0.0.1:5000/boards"

  const [boards, setBoards] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({
    board:{
      title:'',
      owner:'',
      id: null
    }
  });
  
  
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
  
  const selectBoard = (id) => {
    axios.get(`${API}/${id}`)
    .then((result)=>{
      console.log(result.data)
      setSelectedBoard(result.data);

    })
    .catch((error)=>{
      console.log(error)
    });
  };
  
  
  return (
    <div className="page_container">
      <div className='content_container'>
      <h1>Inspiration Board</h1>
      <section className='boards_container'>
        {/* <h1> Boards</h1> */}
        <section>
          <h2> Boards</h2>
          <section className="boards_list">
            <BoardList data={boards} selectBoard={selectBoard} />
          </section>
        </section>
          <section>
            <h2>Selected Boards</h2>
            <p className="selected_board">{selectedBoard.board.id ? `${selectedBoard.board.title} - ${selectedBoard.board.owner}` : 'Select a Board from the Board List!'}</p>
          </section>
          <section className='new-board-form_container'>
            <h2>Create A New Board</h2>
            <NewBoardForm addBoard={postBoard} />
            </section>
          </section>{selectedBoard.board.id ? <CardList board={selectedBoard.board}></CardList> : ''}
        </div>
    </div>
  );
}

export default App;
