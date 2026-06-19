import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/action/todoAction";

const PopUp = ({ formInput,setFormInput,setIsPopUp,isEdit }) => {

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { value, name, type } = e.target;
    setFormInput((prev) => {
      return { ...prev, [name]: name==="completed"?value === "true":value };
    });
  };

  const submitData = () => {
    if(formInput.inputData==="") return;
     if(!isEdit){
       dispatch(addTodo({
      ...formInput,
      id:Date.now(),
      createdAt:new Date().toLocaleString()
    }))
     }else{
      dispatch(editTodo({
        ...formInput,
        inputData:formInput.inputData,
        completed:formInput.completed
      }))
     }
    setIsPopUp(false);
    setFormInput({
      inputData: "",
      completed: false,
    });
  }

  const cancelData = () => {
    setFormInput({
      inputData: "",
      completed: false,
    });
  };

  return (
    <div className="w-full h-full bg-black/40 absolute top-0 left-0 flex justify-center items-center px-4">
      <div className="w-full max-w-100 relative">
        <div className="absolute w-7 h-7 right-2 -top-9 tex-xl flex items-center justify-center rounded cursor-pointer bg-gray-200">
          <RxCross1 className="" onClick={() => setIsPopUp(false)} />
        </div>
        <div className="w-full bg-slate-200 flex flex-col items-start gap-6 p-4 rounded">
          <h1 className="font-medium">{isEdit?"Edit TODO":"Add TODO"}</h1>
          <label htmlFor="title" className="w-full text-gray-700">
            Title
            <input
              type="text"
              id="title"
              className="w-full bg-white py-2 px-2 rounded"
              name="inputData"
              onChange={handleInput}
              value={formInput.inputData}
              maxLength={40}
            />
          </label>
          

          <label htmlFor="status" className="w-full text-gray-700">
            Status
            <select
              className="bg-white py-1 outline-0 w-full rounded"
              id="status"
              name="completed"
              onChange={handleInput}
              value={formInput.completed}
            >
              <option value={false}>Pending</option>
              <option value={true}>Completed</option>
            </select>
          </label>

          <div className="w-full flex gap-3">
            <button
              className="bg-blue-600/90 py-2 px-4 text-white hover:bg-blue-700 duration-300 ease-in rounded cursor-pointer"
              onClick={submitData}
            >
              {isEdit?"Edit Task":"Add Task"}
            </button>
            <button className="bg-gray-600/80 py-2 px-4 text-white hover:bg-gray-700 duration-300 ease-in rounded cursor-pointer" onClick={cancelData}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
