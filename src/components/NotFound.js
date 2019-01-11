import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card border-primary mb-3 w-50 text-center m-2 p-2" >
                    <h3>Sozza page not found...404...does not compute...</h3>
                    <img className='img-thumbnail mx-auto' width='180' height='180' src="https://motherhow.com/wp-content/uploads/2015/10/cute-crying-baby-e1444723335206.jpg" alt="crying baby"/>
                </div>
            </div>
        );
    }
}

export default NotFound
