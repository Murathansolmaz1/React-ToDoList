import './App.css';

function App() {
  return (
    <div className="App">
      <section className="todoapp">
		<header className="header">
			<h1>todos</h1>
			<form>
				<input className="new-todo" placeholder="What needs to be done?" autofocus></input>
			</form>
		</header>
		{/* <!-- This section should be hidden by default and shown when there are todos --> */}
		<section className="main">
			<input className="toggle-all" type="checkbox"></input>
			<label for="toggle-all">
				Mark all as complete
			</label>
	
			<ul className="todo-list">
				<li className="completed">
					<div className="view">
						<input className="toggle" type="checkbox"></input>
						<label>Learn JavaScript</label>
						<button className="destroy"></button>
					</div>
				</li>
				<li>
					<div className="view">
						<input className="toggle" type="checkbox"></input>
						<label>Learn React</label>
						<button className="destroy"></button>
					</div>
				</li>
				<li>
					<div className="view">
						<input className="toggle" type="checkbox"></input>
						<label>Have a life!</label>
						<button className="destroy"></button>
					</div>
				</li>
			</ul>
		</section>
	
		{/* <!-- This footer should hidden by default and shown when there are todos --> */}
		<footer className="footer">
	
			{/* <!-- This should be `0 items left` by default --> */}
			<span className="todo-count">
				<strong>2</strong>
				items left
			</span>
	
			<ul className="filters">
				<li>
					<a className="selected">All</a>
				</li>
				<li>
					<a>Active</a>
				</li>
				<li>
					<a>Completed</a>
				</li>
			</ul>
	
			{/* <!-- Hidden if no completed items are left ↓ --> */}
			<button className="clear-completed">
				Clear completed
			</button>
		</footer>
	</section>
	
	<footer className="info">
		<b><p>Click to edit a todo</p></b>
		<b><p>Created by <a href="https://github.com/Murathansolmaz1"><b>Murathan Solmaz</b></a></p></b>
		<b><p>Part of <a href="http://todomvc.com"><b>TodoMVC</b></a></p></b>
	</footer>
    </div>
  );
}

export default App;
