// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;
admin.initializeApp();

exports.addData = functions.https.onRequest(async (req, res) => {
    const data = req.body
    data.timestamp = FieldValue.serverTimestamp()
    const writeData = await admin.firestore().collection('apple-health-data').add(data)
    res.json({result: `Health Data added to db: ${writeData.id}`})
})