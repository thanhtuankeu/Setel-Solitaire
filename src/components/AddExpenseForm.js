import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	const { players } = useContext(AppContext);

	const [name, setName] = useState('');
	const [point, setPoint] = useState(10000);
	const [multiplier, setMultiplier] = useState(1);

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			playerBoard: players,
			cost: parseInt(point),
			multiplier : multiplier,
			timeStamp : new Date()
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm col-lg-4'>
					<label className="mr-sm-2" for="name">Player</label>
					<select required className="custom-select mr-sm-2" id="name" value={name} onChange={(event) => setName(event.target.value)}>
					<option value="">None</option>
					{players.map((player) => (
						<option value={player.name}>{player.name}</option>
					))}
					</select>
				</div>
				<div className='col-sm col-lg-4'>
					<label className="mr-sm-2" for='cost'>Bet Point</label>
					<select className="custom-select mr-sm-2" id="cost" value={point} onChange={(event) => {console.log(event.target.value) ;setPoint(event.target.value)}}>
						<option selected value="10000">10000</option>
						<option value="20000">20000</option>
						<option value="30000">30000</option>
					</select>
				</div>
				<div className='col-sm col-lg-4'>
					<label className="mr-sm-2" for='multiplier'>Multiplier Point</label>
					<select className="custom-select mr-sm-2" id="multiplier" value={multiplier} onChange={(event) => {setMultiplier(event.target.value)}}>
						<option selected value="1">1</option>
						<option value="2">2</option>
						<option value="4">4</option>
					</select>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
