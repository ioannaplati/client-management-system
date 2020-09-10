import React , { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';

function ViewClientComponent(props) {
    const id = props.match.params.id;
    const[client, setClient] = useState([]);

    useEffect(() => {
        ClientService.getClientById(id).then((res) => {
            setClient(res.data);
        });
    });

    return(
        <div>
            <br></br>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Client Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>First Name: </label>
                        <div>{client.firstName}</div>
                    </div>
                    <div className='row'> 
                        <label>Last Name: </label>
                        <div>{client.lastName}</div>
                    </div>
                    <div className='row'>
                        <label>Email: </label>
                        <div>{client.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewClientComponent;