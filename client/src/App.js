import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CategoryList from './components/Category/CategoryList';
import About from './components/About';
import CreateQuestion from './components/Questions/CreateQuestion';

/**  Category Components **/
import CreateCategory from './components/Category/CreateCategory';

/** Quiz List component */
import CreateQuiz from './components/Quiz/CreateQuiz';
import QuizList from "./components/Quiz/QuizList";

/** Questions */
import QuestionList from './components/Questions/QuestionList';

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
							<Link to={'/quiz/create'} className='nav-link'>
								Create Quiz
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
					<Route exact path='/category' component={CategoryList} />
					<Route exact path='/category/create' component={CreateCategory}></Route>
					<Route exact path='/category/:id' component={QuizList} />
					<Route exact path='/quiz/create' component={CreateQuiz} />
					<Route exact path='/quiz/:id' component={QuestionList} />
					<Route path='/create' component={CreateQuestion} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
