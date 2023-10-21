const { tcQuery, gsmQuery, secmenQuery } = require('../sql/sqlQueries');
const axios = require('axios');
const onlineApi = require('../utils/onlineApiFunc');
const adsoyad = (req, res) => {
    const { ad, soyad, il, ilce } = req.body;
    if (!ad || !soyad) return res.status(400).json({ success: false, message: 'Name and surname is required params!' })
    let query = 'SELECT * FROM `101m` WHERE '
    query += `\`ADI\` = "${ad}" AND \`SOYADI\` = "${soyad}"`
    if (il)
        query += ` AND \`NUFUSIL\` = "${il}"`
    if (ilce)
        query += ` AND \`NUFUSILCE\` = "${ilce}"`
    tcQuery(query, res);
};
const adsoyadSecmen = (req, res) => {
    const { ad, soyad, il, ilce } = req.body;
    if (!ad || !soyad) return res.status(400).json({ success: false, message: 'Name and surname is required params!' })
    let query = 'SELECT * FROM `secmen2015` WHERE '
    query += `\`ADI\` = "${ad}" AND \`SOYADI\` = "${soyad}"`
    if (il)
        query += ` AND \`NUFUSILI\` = "${il}"`
    if (ilce)
        query += ` AND \`NUFUSILCESI\` = "${ilce}"`
    secmenQuery(query, res);
};

const tc = (req, res) => {
    const { tc } = req.body;
    const query = `SELECT * FROM \`101m\` WHERE \`TC\` = "${tc}"`;
    tcQuery(query, res);
};
const tcSecmen = (req, res) => {
    const { tc } = req.body;
    const query = `SELECT * FROM \`secmen2015\` WHERE \`TC\` = "${tc}"`;
    secmenQuery(query, res);
};

const gsm = (req, res) => {
    const { tc, gsm } = req.body;
    let query = '';
    if (tc)
        query = `SELECT * FROM \`116m\` WHERE \`TC\` = "${tc}"`;
    else if (gsm)
        query = `SELECT * FROM \`116m\` WHERE \`GSM\` = "${gsm}"`;
    gsmQuery(query, res);
};

const aile = async (req, res) => {
    const results = [];
    const token = req.headers.authorization;
    const { tc } = req.body;
    const user = (await axios.post('http://localhost:5000/api/tc', { tc }, {headers: {Authorization: token}})).data.response[0];
    const mother = (await axios.post('http://localhost:5000/api/tc', { tc: user.ANNETC }, {headers: {Authorization: token}})).data.response[0];
    const father = (await axios.post('http://localhost:5000/api/tc', { tc: user.BABATC }, {headers: {Authorization: token}})).data.response[0]
    user.Yakinlik = 'Kendisi';
    mother.Yakinlik = 'Annesi';
    father.Yakinlik = 'Babası';
    const query = `SELECT * FROM \`101m\` WHERE \`ANNETC\` = "${mother.TC}" AND \`BABATC\` = "${father.TC}"`;
    const childQuery = `SELECT * FROM \`101m\` WHERE \`ANNETC\` = "${user.TC}" OR \`BABATC\` = "${user.TC}"`;
    tcQuery(childQuery, res, (err, response) => {
        response.forEach(m => {
            if (m.TC == user.TC) return;
            m.Yakinlik = 'Çocuğu'
            results.push(m)
        });
    })
    results.push(user, mother, father);
    tcQuery(query, res, (err, response) => {
        response.forEach(m => {
            if (m.TC == user.TC) return;
            m.Yakinlik = 'Kardeşi'
            results.push(m)
        });
        res.status(200).json({ success: true, response: results })
    });

    // tcQuery(query, res, (err, response) => {
    //     const user = response[0];
    //     user.Yakinlik = 'Kendisi'
    //     results.push(user);
    //     const motherTc = user.ANNETC;
    //     const fatherTC = user.BABATC;
    //     query = `SELECT * FROM \`101m\` WHERE \`TC\` = "${motherTc}"`;
    //     tcQuery(query, res, (err, response) => {
    //         const mother = response[0];
    //         mother.Yakinlik = 'Annesi'
    //         results.push(response[0])
    //     })
    //     query = `SELECT * FROM \`101m\` WHERE \`TC\` = "${fatherTC}"`;
    //     tcQuery(query, res, (err, response) => {
    //         const father = response[0];
    //         father.Yakinlik = 'Babası'
    //         results.push(response[0])
    //     })
    //     query = `SELECT * FROM \`101m\` WHERE \`ANNETC\` = "${motherTc}" AND \`BABATC\` = "${fatherTC}"`;
    //     tcQuery(query, res, (err, response) => {
    //         response.forEach(m => {
    //             if(m.TC == user.TC) return;
    //             m.Yakinlik = 'Kardeşi';
    //             results.push(m);
    //         })
    //         res.status(200).json({success: true, response: results});
    //     });

    // });

};

const proService = (req, res) => onlineApi(req.query, res);

module.exports = {
    adsoyad,
    tc,
    gsm,
    aile,
    proService,
    tcSecmen,
    adsoyadSecmen
}
