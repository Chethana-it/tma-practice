import React, { useState } from 'react';
import {FiTrash2, FiCheckCircle } from "react-icons/fi"

function Home() {
  const [tasks, setTasks] = useState([
    
  ]);

  // User input task state
  const [inputTask, setInputTask] = useState('');

  // Add new task
  const addNewTask = (title) => {
    if (title !== '') {
      const lastId = tasks.length===0 ? 0 : tasks[tasks.length - 1].id;
      const newTask = { id: lastId + 1, title: title, completed: false };
      setTasks([...tasks, newTask]);
      setInputTask("")
    }
  };

  // remove task
  const removeTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((task)=> (task.id !== id))
    })
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold py-5">Task master</h1>
      <p className="text-sm font-thin px-16">
        It's important to note that project management methodologies, such as Agile or Waterfall, may have slightly
        different steps or variations in their approach. The steps provided above offer a general framework that can be
        adapted to suit the specific needs of your
      </p>

      {/* Add a section where the user can add their own task */}
      <section className="flex flex-col items-center justify-center mt-3">
        <input
          type="text"
          placeholder="Add new task"
          className="border-2 border-purple-400 p-2 m-2 w-60 rounded-md"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={() => addNewTask(inputTask)} className="bg-yellow-400 p-2 m-2 w-60 rounded-md">
          Add New Task
        </button>
      </section>

      {/* show all tasks */}
      <section className='p-5 border-t-4 m-5'>
        {
          tasks && tasks.map((task) => {
            return (
              <div key={task.id} className='flex flex-row items-center justify-center gap-4'>
                <p className={task.completed ? 'bg-green-400 p-2 m-2 rounded-md' : 'bg-purple-400 p-2 m-2 rounded-md'}>
                  {task.completed ? task.title + "(completed!)" : task.title}
                </p>

                <div onClick={() => removeTask(task.id)} className='p-3 bg-red-500 rounded-md cursor-pointer text-white'>
                  <FiTrash2 />
                </div>
                <div onClick={() => {
                  setTasks(tasks.map((item) => {
                    if (item.id === task.id) {
                      return {...item, completed:true}
                    }
                  }))
                }} className='p-3 bg-green-500 rounded-md cusor-pointer text-white'>
                  <FiCheckCircle />
                </div>
                
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default Home;
