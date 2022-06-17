// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.addData = functions.https.onRequest(async (req, res) => {
    const data = req.body
    const writeData = await admin.firestore().collection('apple-health-data').add(data)
    res.json({result: `Health Data added to db with ID: ${writeData.id}`})
})