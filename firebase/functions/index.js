// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;
admin.initializeApp();

exports.addData = functions.https.onRequest(async (req, res) => {
    const healthData = req.body
    let data = {}
    data.timestamp = FieldValue.serverTimestamp()
    data.carbs = healthData.data.metrics[0].data[0].qty ? healthData.data.metrics[0].data[0].qty : 0
    data.kcals = healthData.data.metrics[1].data[0].qty ? healthData.data.metrics[1].data[0].qty : 0
    data.protein = healthData.data.metrics[2].data[0].qty ? healthData.data.metrics[2].data[0].qty : 0
    data.steps = healthData.data.metrics[3].data[0].qty ? healthData.data.metrics[3].data[0].qty : 0
    data.fat = healthData.data.metrics[4].data[0].qty ? healthData.data.metrics[4].data[0].qty : 0
    data.distance = healthData.data.metrics[5].data[0].qty ? healthData.data.metrics[5].data[0].qty : 0
    data.workout = healthData.data.workouts ? healthData.data.workouts : []
    const writeData = await admin.firestore().collection('apple-health-data').add(data)
    res.json({result: `Health Data added to db: ${writeData.id}`})
})