import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CardList from './components/CardList';
import About from './components/About';
import Topic from './components/Topic';
import CreateQuestion from './components/CreateQuestion';
import CreateCategory from './components/Category/CreateCategory';


function App() {
	return (
		<div className='App'>
			<Router>
				<h2>Auto test Logo</h2>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<ul className='navbar-nav mr-auto'>
						<li>
							<Link to={'/'} className='nav-link'>
								Home{' '}
							</Link>
						</li>
						<li>
							<Link to={'/category'} className='nav-link'>
								Category
							</Link>
						</li>
						<li>
							<Link to={'/create'} className='nav-link'>
								Create Question
							</Link>
						</li>
						<li>
							<Link to={'/category/create'} className='nav-link'>
								Create Category
							</Link>
						</li>
						<li>
							<Link to={'/about'} className='nav-link'>
								About
							</Link>
						</li>
					</ul>
				</nav>
				<hr />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/category' component={CardList} />
					<Route exact path='/category/create' component={CreateCategory}></Route>
					<Route exact path='/category/:id' component={Topic} />
					<Route path='/create' component={CreateQuestion} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
