import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
       <div>
            <nav className="nav-bar">
                <ul className='nav-links-container'>
                    <li><Link className="nav-link" to="/help">Help</Link></li>
                    <li><Link className="nav-link" to="/recommendations">Recommendations</Link></li>
                    <li><Link className="nav-link" to="/members">Members</Link></li>
                    <li><Link className="nav-link" to="/books">Books</Link></li>
                    <li><Link className="nav-link" to="/">Dashboard</Link></li>
                </ul>
            </nav>
       </div>
    );
}

export default Navigation;