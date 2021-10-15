import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';

const CurrentPlayerList = () => {
    const { players } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const [player, setPlayer] = useState('');

    const handleDeletePlayer = (name) => {
        dispatch({
            type: 'DELETE_PLAYER',
            payload: name,
        });
    };

    const handleAddlayer = () => {
        const playerPayload = {
            id: uuidv4(),
            name: player
        };
        dispatch({
            type: 'ADD_PLAYER',
            payload: playerPayload,
        });
        setPlayer('')
    };


    return (
        <div className="ml-3 ">
            <div>
                {players.map((player) => (
                    <em>
                        <span class="badge badge-secondary">{player.name}</span>
                        <TiDelete size='1.5em' onClick={() => {
                            handleDeletePlayer(player.name)
                        }} />
                    </em>
                ))}
            </div>
            <div>
                <input
                    required='required'
                    class='form-control-sm'
                    id='playerName'
                    value={player}
                    onChange={(event) => setPlayer(event.target.value)}
                />
                <button type="button" class="btn btn-dark btn-sm ml-2" onClick={() => {
                    handleAddlayer()
                }} >Add player</button>
            </div>

        </div>
    );
}

export default CurrentPlayerList;