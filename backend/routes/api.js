const express = require('express');
const router = express.Router();

const API_URL = 'http://autumn-resonance-1298.getsandbox.com';

router.get(`${API_URL}/products`, (req,res) => {
    res.send('api works');
})

module.exports = router;