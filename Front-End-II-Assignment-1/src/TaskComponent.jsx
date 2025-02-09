function TaskComponent(){
    
    // Don't know what you specifically meant so I assumed to just use your tasks
    const tasks = ["Task 1: Create a React Component Using JSX", "Task 2: Create a Class Component and Use JSX", "Task 3: Dynamic Content Using JSX and React Components", "Task 4: Parent and Child Components Using JSX"];

    return (
      <>
        <h3>Your Random Task:<br></br>
            {tasks[Math.floor(Math.random() * 4)]}
        </h3>
      </>
    )
  }
export default TaskComponent