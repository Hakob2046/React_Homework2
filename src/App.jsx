// import React, { Suspense, lazy, useState } from "react";
// import TimerComponent from "./components/TimerComponent";
// import NormalComponent from "./components/NormalComponent";
// import OptimizedComponent from "./components/OptimizedComponent";
// import InfoComponent from "./components/InfoComponent";
// import MainComponent from "./components/MainComponent";

// const LazyLoadedComponent = lazy(() => import("./components/LazyLoadedComponents"));

// function App() {
//   const [value, setValue] = useState(1);
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React Advanced Project Example</h1>

//       {/* 1․ Props */}
//       <MainComponent />

//       {/* 2․ Lifecycle (Unmount) */}
//       <hr />
//       {showTimer && <TimerComponent />}
//       <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>

//       {/* 3․ PureComponent */}
//       <hr />
//       <button onClick={() => setValue(value)}>Update (same value)</button>
//       <NormalComponent value={value} />
//       <OptimizedComponent value={value} />

//       {/* 4․ defaultProps + PropTypes */}
//       <hr />
//       <InfoComponent title="React Project" year={2025} />
//       <InfoComponent />

//       {/* 5․ Lazy Loading */}
//       <hr />
//       <Suspense fallback={<p>Loading component...</p>}>
//         <LazyLoadedComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// // import UserTable from "./UserTable";
// import UserCard from "./UserCard";
// import UserCardPoor from "./UserCardPoor";
// import { useState } from "react";
// import Button from "./Button";

// function App() {
//   const [name, setName] = useState('Suren');
//   const [namepur, setNamepur] = useState('Karen');
//   const hendlClick = () => { setName('Anna'); console.log('component') };
//   const hendlClickPur = () => { setNamepur('Garnik'); console.log('purcomponent') };
//   return (
//     <div>
//       {/* <UserTable /> */}
//       <UserCard hhname={name} age={15} adreess={'xorenaci33'} />
//       <UserCardPoor name={namepur} />
//       <button onClick={hendlClick}>Touch</button>
//       <button onClick={hendlClickPur}>Enter</button>
//       <Button variant={'secondary'} size={'lg'}>entter</Button>
//       <Button variant={'danger'} size={'sm'}>like</Button>
//       <Button>hhhh</Button>

//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { ToDoList } from "./components/das4/TodoList";

// function App() {
//   return (
//     <ToDoList />

//   )
// };
// export default App;

// import React from "react";
// import { useState } from "react";
// import TaskInput from "./components/das4_homework/TaskInput.jsx";
// import TaskList from "./components/das4_homework/TaskList.jsx";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (text) => {
//     if (text.trim() === "") return;
//     const newTask = { id: Date.now(), text, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <div className="todo-container">
//       <h1> My ToDo List</h1>
//       <TaskInput onAdd={addTask} />
//       <TaskList
//         tasks={tasks}
//         onDelete={deleteTask}
//         onToggle={toggleComplete}
//       />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import MountedComponent from "./components/das5/UseEffect/MountedComponent";
// import Counter from "./components/das5/UseEffect/Counter";
// import Timer from "./components/das5/UseEffect/Timer";
// import Card from "./components/das5/UseEffect/Card";

// function App() {
//   return (
//     <div>
//       <MountedComponent />
//       <Counter />
//       <Timer />
//       <Card name={'With Jsx'}>
//         <h2>Վերնագիր</h2>
//         <p>Որևէ բովանդակություն քարտի ներսում</p>
//       </Card>
//       <Card name={'With Text'}>Enter</Card>

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Timer from "./components/Das5_Homework/Timer";
import Card from "./components/Das5_Homework/Card";
import Message from "./components/Das5_Homework/Message";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">
        React Hooks & Composition Example
      </h1>

      <Card>
      <Message text="Welcome to my React app " color="blue" />
      </Card>

      <button
        onClick={() => setShowTimer(!showTimer)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-6 hover:bg-green-600"
      >
        {showTimer ? "Remove timer" : "Show timer"}
      </button>

      {showTimer && (
        <Card>
          <Timer />
        </Card>
      )}
    </div>
  );
};

export default App;
