import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';

function UpdateClientComponent(props) {
    const history = useHistory();
    const id = props.match.params.id;
    const[firstName, setFirstName] = useState([]);
    const[lastName, setLastName] = useState([]);
    const[email, setEmail] = useState([]);

    useEffect(() => {
        ClientService.getClientById(id).then(res => {
            let client = res.data;
            setFirstName(client.firstName);
            setLastName(client.lastName);
            setEmail(client.email); 
        });
    }, [id]);

    const updateClient = (e) => {
        e.preventDefault();
        let updatedClient = {firstName: firstName, lastName: lastName, email: email};

        ClientService.updateClient(id, updatedClient).then(res => {
            history.push('/clients');
        });
    };

    const cancel = () => {
        history.push("/clients");
    };

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:'50px'}}>
                        <h3 className='text-center'>Update Client</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First name:</label>
                                    <input placeholder='First Name' name='firstName' className='form-control'
                                    value={firstName} onChange={e => setFirstName(e.target.value)}></input>
                                 </div>
                                 <div className='form-group'>
                                    <label>Last name:</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control'
                                    value={lastName} onChange={e => setLastName(e.target.value)}></input>
                                </div>  
                                <div className='form-group'> 
                                    <label>Email:</label>
                                    <input placeholder='Email' name='email' className='form-control'
                                    value={email} onChange={e => setEmail(e.target.value)}></input>
                                </div>

                                <button className='btn btn-success' onClick={e => updateClient(e)}>Save</button>
                                <button type='button' className='btn btn-danger' onClick={cancel} style={{marginLeft:'10px'}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateClientComponent;