import './App.css'
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import TaskComponent from './TaskComponent';

function App(){
  return (
    <>
      <div>
        <Greeting />
        <UserInfo />
        <TaskComponent />
      </div>
    </>
  )
}

export default App