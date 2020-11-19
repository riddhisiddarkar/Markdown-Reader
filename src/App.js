import {useState} from "react"
import './App.css';
import MarkDown from './components/MarkDown';
import Result from './components/Result';
import MarkdownContext from "./MarkdownContext";

function App() {
  const [markdowntext, setMarkdowntext] = useState("")
  const contextValue = {
    markdowntext,
    setMarkdowntext
  }
  return (
    <MarkdownContext.Provider value={contextValue}>
      <div className="App">
        <h1 className="title">
          Markdown Editor
        </h1>
        <div className="editorcontainer">
          <MarkDown />
          <Result />
        </div>
      </div>
    </MarkdownContext.Provider>
    
  );
}

export default App;
