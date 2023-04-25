import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({}) {
    return (
        <body>
            <main>
                <div>
                    <table>
                        <p>{<Link className="App-link" to="/books"> All Books</Link>}</p>
                        <tbody>
                            <tr>
                                <td>The Yesterday Man</td>
                                <td>David Micheline</td>
                                <td>Action Comic</td>
                                <td>10.99</td>
                            </tr>
                            <tr>
                                <td>The Last Date</td>
                                <td>John Classic</td>
                                <td>Romance Novel</td>
                                <td>5.99</td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
                <div>
                    <table>
                        <p>{<Link className="App-link" to="/members"> All Members</Link>}</p>
                        <tbody>
                            <tr>
                                <td>Jose Juan</td>
                                <td>josejuan@gmail.com</td>
                                <td>Hanoi, Vietnam</td>  
                            </tr>
                            <tr>
                                <td>Kelly Harris</td>
                                <td>kh@gmail.com</td>
                                <td>London, UK</td>  
                            </tr>
                            
                        </tbody>
                    </table>
                </div><br/>
                <div>
                    <table>
                        <p>{<Link className="App-link" to="/recommendations"> All Recommendations</Link>}</p>
                        <tbody> 
                            <tr>
                                <td>The Yesterday Man</td>
                                <td>Kelly Harris</td>
                                <td>5</td>
                                <td>It is really Good.</td>    
                            </tr>
                            <tr>
                                <td>The Last Date</td>
                                <td>Kelly Harris</td>
                                <td>4</td>
                                <td>Awesome!</td>    
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
            </main>
        </body>

    );
}

export default Dashboard;