import './App.css';
import TodoList from '../components/Todo';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default Home;
