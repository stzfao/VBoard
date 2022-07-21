import { v4 as uuid } from 'uuid';
import { GET_CARDS, ADD_CARD, DELETE_CARD } from '../actions/types'


const initialState = {
    cards: [
        { id: uuid(), title: 'Test1' },
        { id: uuid(), title: 'Test2' },
        { id: uuid(), title: 'Test3' },
        { id: uuid(), title: 'Test4' },
        { id: uuid(), title: 'Test5' },
        { id: uuid(), title: 'Test6' }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            };
        case ADD_CARD:
            return {
                ...state,
                cards: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}