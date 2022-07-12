import React, { Component } from 'react';
import uuid from 'uuid';

class List extends Component{
    state = {
        cards: [
            { id: uuid(), title: 'Test1'},
            { id: uuid(), title: 'Test2'},
            { id: uuid(), title: 'Test3'},
            { id: uuid(), title: 'Test4'},
            { id: uuid(), title: 'Test5'},
            { id: uuid(), title: 'Test6'},
        ]
    }

    render() {
        const {cards} = this.state;
        return (
            <section>
                
            </section>
        );
    }
}


export default List;