import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientService from '../services/ClientService';
import { useHistory } from 'react-router-dom';

function ClientListComponent(props) {
    const[clients, setClients] = useState([]);
    const history = useHistory();

    // The effect hook is only called initially. After that, 
    // user has to refresh the page if the client list gets updated.
    useEffect(() => {
        ClientService.getClients().then((res) => {
            setClients(res.data);
        });
    }, []);

    const addClient = () => {
        history.push('/add-client');
    };

    return(
        <div>
            <h2 className='text-center'>Clients</h2>
            <div className='row'>
                <button className='btn btn-primary' onClick={addClient} style={{marginBottom:'10px'}}>Add Client</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map(client => 
                                <tr key={client.id}>
                                    <td>{client.firstName}</td>
                                    <td>{client.lastName}</td>
                                    <td>{client.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClientListComponent;
