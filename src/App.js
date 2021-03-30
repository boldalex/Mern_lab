import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navigation from './components/Navigation';
import BookList from './components/books/BookList';
import CreateBook from './components/books/CreateBook';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/createBook" component={CreateBook}/>
        <Route path="/" component={BookList}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
