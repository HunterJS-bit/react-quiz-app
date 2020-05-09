import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
/** Common Components */
import Header from './components/common/Header';
import Footer from './components/common/Footer';


import CategoryList from './components/Category/CategoryList';
import About from './components/About';
import CreateQuestion from './components/Questions/CreateQuestion';

/**  Category Components **/
import CreateCategory from './components/Category/CreateCategory';

/** Quiz List component */
import CreateQuiz from './components/Quiz/CreateQuiz';
import QuizList from "./components/Quiz/QuizList";
import QuizResult from './components/Quiz/QuizResult';

/** Questions */
import QuestionList from './components/Questions/QuestionList';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/category' component={CategoryList} />
					<Route exact path='/category/create' component={CreateCategory}></Route>
					<Route exact path='/category/:id' component={QuizList} />
					<Route exact path='/quiz/create' component={CreateQuiz} />
					<Route exact path='/quiz/:id' component={QuestionList} />
					<Route exact path='/result' component={QuizResult} />
					<Route path='/create' component={CreateQuestion} />
					<Route path='/about' component={About} />
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
