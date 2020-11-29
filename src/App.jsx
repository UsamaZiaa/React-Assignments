import './App.css';
import React from 'react'
// import TodoApp from './components/todo'
// import Counter from './components/counter'
// import TextToggle from './components/TextToggle'
// import StopWatch from './components/StopWatch'
// import GithubProfile from "./components/GithubProfile"
import Login from './components/Login'

class App extends React.Component {
  render() {
        return(
            <div>
              {/* <TodoApp/> */}
              {/* <Counter count={5}/>
              <Counter count={10}/> */}
              {/* <TextToggle/> */}
              {/* <StopWatch/> */}
              {/* <GithubProfile/> */}
              <Login/>
          </div>
        )
  }
}
export default App;