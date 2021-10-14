import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import CurrentPlayerList from './components/CurrentPlayerList'
const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Champion League Setel</h1>
				<div className='row mt-3'>
					{/* <div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div> */}
				</div>
				<h3 className='mt-3'>Current Player list</h3>
				<div className='row mt-3'>
					<CurrentPlayerList />
				</div>

				<h3 className='mt-3'>Result list</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Match Result</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
