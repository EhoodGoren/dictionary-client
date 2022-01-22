const AWS = require("aws-sdk");
const data = require('../data/filterData');

AWS.config.update({
  region: "eu-west-1",
});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const batchUploadData = async (uploadData) => {
    const params = {
        RequestItems: {
            'dictionary': uploadData
        }
    }
    try {
        await ddb.batchWriteItem(params).promise();
    } catch (error) {
        console.log(error);
    }
}

const formatData = data.map(({ word, part_of_speech, definition }) => {
    return {
        PutRequest: {
            Item: {
                word: { 'S': word },
                part_of_speech: { 'S': part_of_speech || 'none' },
                definition: { 'S': definition }
            }
        }
    }
});

const splitData = [];
for (let i = 0; i < formatData.length; i += 25) {
    const dataSlice = formatData.slice(i, i + 25);
    splitData.push(dataSlice);
}

const uploadAllData = async () => {
    try {
        const uploadResponse = await Promise.all(splitData.map(async (dataSlice) => {
            await batchUploadData(dataSlice);
        }));
        console.log(uploadResponse);
    } catch (error) {
        console.log(error);   
    }
}
uploadAllData();
