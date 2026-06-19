import React, { useRef, useState } from "react";
import TodoCard from "./components/TodoCard";
import PopUp from "./components/PopUp";
import { useSelector } from "react-redux";
const App = () => {
  const [isPopUp,setIsPopUp] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
    const [formInput, setFormInput] = useState({
    inputData: "",
    completed: false,
  });
  const [selectedList,setSelectedList] = useState("all");

  const todoList = useSelector(state=> state.todoList);
  // console.log(todoList)

  const handleSelect = (e)=>{
    setSelectedList(e.target.value)
  }
  const getDisplayList = [];
  const displayList=()=>{
    switch(selectedList){
      case "active":
        return todoList.filter((item)=> item.completed===false);
      
      case "completed":
        return todoList.filter((item)=> item.completed===true);
      default:
        return todoList
    }
    

  }
  return (
    <div className="bg-slate-300 min-h-screen h-full relative">
      {isPopUp && <PopUp setIsPopUp={setIsPopUp} isEdit={isEdit} formInput={formInput} setFormInput={setFormInput}/>}
      <div className="w-full max-w-150 mx-auto  py-4 px-2 bg-white">
        <h1 className="text-3xl font-bold text-center tracking-[2px] text-slate-600">
          TODO LIST
        </h1>
        <div className=" w-full flex justify-between my-4">
          <button className="bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 duration-300 ease-in rounded" onClick={()=> {
            setIsPopUp(true)
            setIsEdit(false);
          }}>
            Add Task
          </button>
          <select className="bg-slate-300 px-3 py-1 outline-0" onChange={handleSelect} value={selectedList}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="w-full bg-slate-200 rounded p-4 flex flex-col items-center gap-3">
          {!displayList().length && <h1>List is empty</h1>}
          {
            displayList().map((item)=> <TodoCard setFormInput={setFormInput} setIsPopUp={setIsPopUp} setIsEdit={setIsEdit} key={item.id} id={item.id} content={item.inputData} date={item.createdAt} completed={item.completed}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
