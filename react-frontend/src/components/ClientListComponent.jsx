import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientService from '../services/ClientService';

function ClientListComponent() {
    const[clients, setClients] = useState([]);

    useEffect(() => {
        ClientService.getClients().then((res) => {
            setClients(res.data);
        });
    });

    return(
        <div>
            <h2 className='text-center'>Clients</h2>
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
