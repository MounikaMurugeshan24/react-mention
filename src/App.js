import { useState } from 'react';
import './App.css';
import CustomInput from './components/customInput/CustomInput';

import { SUGGESTIONS_CONFIG } from './constants/data';
import Comments from './components/comments/Comments';

function App() {

  const [commentsList, setCommentsList] = useState([]);

  const addCommentsToList = (comment) => {
    setCommentsList((prev)=> [...prev, comment]);
  }
   
  return (
    <div className="App flex justify-center bg-slate-700 h-dvh p-5 flex-col">
        <CustomInput postComment={addCommentsToList}  suggestionsConfig={SUGGESTIONS_CONFIG} />
        <Comments commentsList={commentsList}/>
    </div>
  );
}

export default App;
