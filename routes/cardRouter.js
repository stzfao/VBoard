const express = require('express');
const router = express.Router();

const { getCards, addCard, deleteCard } = require('../controller/cardController')

router.get('/', getCards);
router.post('/', addCard);
router.delete('/:id', deleteCard);

module.exports = router;