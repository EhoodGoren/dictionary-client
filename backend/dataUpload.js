const AWS = require("aws-sdk");
const data = require('../data/filterData');

AWS.config.update({
  region: "eu-west-1",
});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
    RequestItems: {
        'dictionary': [
            {
                PutRequest: {
                    Item: {
                        word: { 'S': data[0].word },
                        part_of_speech: { 'S': data[0].part_of_speech || 'none' },
                        definition: { 'S': data[0].definition }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        word: { 'S': data[1].word },
                        part_of_speech: { 'S': data[1].part_of_speech || 'none' },
                        definition: { 'S': data[1].definition }
                    }
                }
            }
        ]
    }
}

const batchUploadData = async () => {
    try {
        await ddb.batchWriteItem(params).promise();
    } catch (error) {
        console.log(error);
    }
}
batchUploadData();
