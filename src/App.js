import Header from "./Component/Header";
import "./App.css";
import AddTask from "./Component/AddTask";
// import Task from "./Component/Task";


function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      {/* <Task /> */}
    </div>
  );
}

export default App;
