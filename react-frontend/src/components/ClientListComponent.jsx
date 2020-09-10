import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientService from '../services/ClientService';
import { useHistory } from 'react-router-dom';

function ClientListComponent() {
    const[clients, setClients] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let mounted = true;

        ClientService.getClients().then((res) => {  
            if (mounted) {
                setClients(res.data);
            }
        });

        return () => {
            mounted = false;
        };
    });

    const deleteClient = (id) => {
        ClientService.deleteClient(id).then((res) => {
            //If delete was successful remove the client from 'clients'
            if (res.data.deleted === true){
                setClients(clients.filter(client => client.id !== id));
            }
        });
    };

    return(
        <div>
            <h2 style={{marginTop:'20px'}} className='text-center'>Clients</h2>
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
                                    <td> 
                                        <button onClick={() => history.push(`/update-client/${client.id}`)} className='btn btn-info'> Update</button>
                                        <button onClick={() => deleteClient(client.id)} className='btn btn-danger' style={{marginLeft:'10px'}}> Delete</button>
                                        <button onClick={() => history.push(`/view-client/${client.id}`)} className='btn btn-primary' style={{marginLeft:'10px'}}> View</button>
                                    </td>
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
