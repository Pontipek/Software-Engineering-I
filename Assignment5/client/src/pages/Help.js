import React from 'react';
import { Link } from 'react-router-dom';

function Help({}) {
    return (
        <body>
            <main>
                <div>
                Need help?<br/>
                From the navigation bar,<br/>
                   <li>
                      Click on {<Link className="App-link" to="/books"> Books</Link>} to view all books
                   </li><br/>  
                   <li>
                      Click on {<Link className="App-link" to="/members"> Members</Link>} to view all members
                   </li><br/>
                   <li>
                      Click on {<Link className="App-link" to="/recommendations"> Recommendations</Link>} to view all of the recommended books
                   </li>  
                </div>
            </main>
        </body>

    );
}

export default Help;