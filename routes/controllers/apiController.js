const Global = require('../../Libs/Global');

const _ = require('lodash');
const speech = require('@google-cloud/speech');
const {Storage} = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');


const speechClient = new speech.SpeechClient();

// The path to the audio file to transcribe
// const filePath = 'input.wav';

// Google Cloud storage
const GOOGLE_CLOUD_PROJECT_ID = 'bionic-freehold-364616';
const bucketName = 'chatbot-123';

const buildAgent = async (req, res, next) => {
    if (Global.AgentInstance.isAgentBuilding) return res.status(403).end('Agent are building');
    try {
        const fullBuild = true
        await Global.AgentInstance.buildAgent(fullBuild)
        res.end("done")
    } catch (error) {
        console.error(error)
        res.status(500).end('Erro on build agent');
    }
}

const uploadToGcs = async (filePath) => {
    try {
        const storage = new Storage({
            projectId: GOOGLE_CLOUD_PROJECT_ID,
            // projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
        });
    
        const bucket = storage.bucket(bucketName);
        const fileName = filePath;
        // const fileName = path.basename(filePath);
        console.log(filePath);
        await bucket.upload(filePath);
        console.log(filePath);
        return `gs://${bucketName}/${fileName}`;
    } catch (error) {
        console.error('ERROR:', error);
    }
    
};

const transcribe = async (gcsUri) => {
    const audio = {
        uri: gcsUri,
    };

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 24000,
        languageCode: 'en-US',
    };

    const request = {
        audio,
        config,
    };
    console.log("sdf");
    await speechClient.longRunningRecognize(request)
    .then((data) => {
            console.log("sdf");
            const operation = data[0];
            
            // The following Promise represents the final result of the job
            console.log("operation");
            console.log(operation);
            console.log("operation");
            return operation.promise();
        })
        .then((data) => {
            const results = _.get(data[0], 'results', []);
            const transcription = results
                .map(result => result.alternatives[0].transcript)
                .join('\n');
            console.log(`Transcription: ${transcription}`);
            return transcription;
        })
        .catch(err => {
            console.error('ERROR:', err);
            res.end("Ops, internal error X(")
        });
};

const ask = async (req, res, next) => {
    try {
        if (req.body.type == "audio") {

            uploaded = uploadToGcs(req.body.say);
            console.log("uploaded");
            console.log(uploaded);
            console.log("uploaded");
            message = await transcribe(uploaded);
    
            console.log("message");
            console.log(message);
            console.log("message");
                // .then((data) =>  { 
                //     message = data; 
                // })
                // .catch(err => {
                //     console.error('ERROR:', err);
                // });
        } else {
            message = req.body.say; 
        }
        const resp = await Global.AgentInstance.response(message, req.body.uID)
        res.json(resp)
    } catch (error) {
        res.end("Ops, internal error X(")
    }
}

module.exports = {
    buildAgent,
    ask
}