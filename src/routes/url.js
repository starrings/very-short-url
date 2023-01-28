const express = require('express');
const router = new express.Router();

router.post('/url/shorts', async (req, res) => {
    try {
        const RANDOM_STRING_LIST = [
            "2", "3", "4", "5", "6", "7", "8", "9", 
            "a", "c", "e", "f", "g", "h", "i", "j", 
            "k", "m", "n", "o", "r", "s", "t", "u", 
            "v", "w", "x", "y", "z", "A", "B", "C",
            "D", "E", "F", "G", "H", "J", "K", "L",
            "M", "N", "P", "Q", "R", "S", "T", "U",
            "V", "W", "X", "Y", "Z"
        ];
        let shortUrlString = "";

        for(let i = 0; i < 7; i++){
            shortUrlString += RANDOM_STRING_LIST[Math.floor(Math.random() * RANDOM_STRING_LIST.length)];
        }

        res.status(201).json({success: shortUrlString});
    } catch (err) {
        res.status(400).json({success: "실패"});
    }
});

module.exports = router;