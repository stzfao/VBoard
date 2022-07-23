import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from './types';
import axios from 'axios';

export const getCards = () => dispatch => {
    dispatch(setCardsLoading());
    axios
        .get('/cards')
        .then(res =>
            dispatch({
                type: GET_CARDS,
                payload: res.data
            }))
};

export const addCard = (card) => dispatch => {
    axios
        .post('/cards', card)
        .then(res =>
            dispatch({
                type: ADD_CARD,
                payload: res.data
            }))
};

export const deleteCard = (id) => dispatch => {
    axios
    .delete(`/cards/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_CARD,
            payload: id
        })
    })
};


export const setCardsLoading = () => {
    return {
        type: CARDS_LOADING
    };
};