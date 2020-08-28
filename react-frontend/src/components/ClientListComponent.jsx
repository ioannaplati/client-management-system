import React, {Component} from 'react'
import ClientService from '../services/ClientService'

class ClientListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }
    }

    componentDidMount(){
        ClientService.getClients().then((res) => {
            this.setState({clients: res.data});
        });
    }

    render() {
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
                                this.state.clients.map(
                                    client => 
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
        )
    }
}

export default ClientListComponent