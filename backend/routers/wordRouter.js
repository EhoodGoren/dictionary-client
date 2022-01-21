const { response } = require('express');
const express = require('express');
const docClient = require('../awsConnection');

const router = express.Router();

const table = 'dictionary';

router.get('/:word', async (req, res) => {
    const { word } = req.params;
    const params = {
        TableName: table,
        KeyConditionExpression: "word = :w",
        ExpressionAttributeValues: {
            ":w": word,
        }
    }
    try {
        const wordMatch = await docClient.query(params).promise();
        wordMatch.Items.length > 0 ? 
            res.send(wordMatch.Items) :
            res.status(404).send("Word doesn't exist");
    } catch (error) {
        console.log(error);
        res.status(500).send('Try again');
    }
});

module.exports = router;
