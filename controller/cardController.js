const Card = require('../models/Card');

const getCards = async(req, res, next) => {
    try{
        Card.find()
        .sort({ rank: -1 })
        .then(cards => res.json(cards));
    } 
    catch(error){
        res.status(404).json({ success: false });
    }
}

const addCard = async(req, res, next) => {
    try{
        const newCard = new Card({
            title: req.body.title,
        });
        newCard.save()
            .then(card => res.json(card));
    } 
    catch(error){
        res.status(404).json({ success: false });
    }
}

const deleteCard = async(req, res, next) => {
    try{
        Card.findById(req.params.id)
        .then(card => card.remove()
            .then(() => res.json({ success: true })));
    } 
    catch(error){
        res.status(404).json({ success: false });
    }
}

module.exports = {
    getCards, 
    addCard, 
    deleteCard
};