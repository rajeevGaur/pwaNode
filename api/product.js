const express = require('express')
const router = express.router;
const webpush = require('web-push');

const vapidKeys = {
    publicKey: 'BH8pknOzsiCKUa-PL_LHJ1f31xUL7BAYUe1w8GTv_kFBJb9vCCh-S2hnLcoMiAa6mLYAxOdB3_TrI2qHnUaM26w',
    privateKey: '8lCmeDaR12V3gLJjFNfXNKYvaYiqlw7OnvUNYQT1c88'
};

webpush.setVapidDetails(
    'mailto:rishabh.gaur@kellton.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
let sub = {};

const payload = {
    notification: {
        data: 'Hi',
        title: 'forcheck only',
        vibrate: [100, 50, 100]
    }
}

router.post('/', function (req, res) {
    console.log(req.body);
    sub = JSON.parse(JSON.stringify(req.body));
    console.log(sub);
    setTimeout(() => {
        webpush.sendNotification(sub, JSON.stringify(payload)).then(() => {
            console.log(' sent successfully.')
            res.status(200).send('success')
        }).catch(err => {
            console.error("Error sending notification, reason: ", err);
            res.sendStatus(500);
        });
    }, 5000);
})

module.exports = router;