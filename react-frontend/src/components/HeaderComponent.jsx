import React, {Component} from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <a href="/clients" style={{marginTop:'5px'}} className="navbar-brand">Client Management System</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/add-client">Add Client <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )    
    }
}

export default HeaderComponent