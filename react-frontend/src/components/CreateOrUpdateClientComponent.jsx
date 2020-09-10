import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';

function CreateOrUpdateClientComponent(props){
    const history = useHistory();
    const id = props.match.params.id;
    const[firstName, setFirstName] = useState([]);
    const[lastName, setLastName] = useState([]);
    const[email, setEmail] = useState([]);

    useEffect(() => {
        if (id !== undefined) {
            ClientService.getClientById(id).then(res => {
                let client = res.data;
                setFirstName(client.firstName);
                setLastName(client.lastName);
                setEmail(client.email); 
            });
        }
    }, [id]);

    const saveOrUpdateClient = (e) => {
        e.preventDefault();
        let client = {firstName: firstName, lastName: lastName, email: email};
        
        if (id === undefined) {
            ClientService.createClient(client).then(res => {
                history.push('/clients');
            });
        } else {
            ClientService.updateClient(id, client).then(res => {
                history.push('/clients');
            });
        }
    };

    const getTitle = () => {
        if (id === undefined){
            //Add
            return <h3 className='text-center'>Add Client</h3>
        } else {
            //Update
            return <h3 className='text-center'>Update Client</h3>
        }
    };

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:'50px'}}>
                        {getTitle()}
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

                                <button className='btn btn-success' onClick={e => saveOrUpdateClient(e)}>Save</button>
                                <button type='button' className='btn btn-danger' onClick={() => history.push("/clients")} style={{marginLeft:'10px'}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrUpdateClientComponent;