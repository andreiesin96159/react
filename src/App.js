import './App.css';
import Header from './Components/Header/Header';
import Pages from './Components/Pages/Pages';
import Sidbar from './Components/Sidbar/Sidbar';
import Message from './Components/Message/Message';
import { Route } from 'react-router-dom'
import New from './Components/New/New'
import Music from './Components/Music/Music'
import Setting from './Components/Setting/Setting'





const App = (proprs) => {
  
  return (
    <div className='app__wrapper'>
      <Header />
      <div className='app__wrapper--content'>
        <Route path='/message' render={() =>
          <Message massage={proprs.state.usersPage.Massages}
            users={proprs.state.usersPage.Users}
            dispatch={proprs.dispatch}/>} />


        <Route path='/pages' render={() =>
          <Pages posts={proprs.state.profilePost.Post}
          dispatch={proprs.dispatch} />} />

        <Route path='/new' render={New} />
        <Route path='/music' render={Music} />
        <Route path='/setting' render={Setting} />
      </div>
      <Sidbar />
    </div>
  );
}

export default App;
