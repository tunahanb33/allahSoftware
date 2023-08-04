const tcQuery = (query, res, callback) => {
    tcConnection.query(query, (err, response) => {
        if(callback) return callback(err, response);
        if (err) return res.status(500).json({ success: false, message: err })
        res.status(200).json({ success: true, response });
    })
};

const gsmQuery = (query, res) => {
    gsmConnection.query(query, (err, response) => {
        if (err) return res.status(500).json({ success: false, message: err })
        response.forEach(m => delete m.ENGEL)
        res.status(200).json({ success: true, response });
    })
};

const secmenQuery = (query, res, callback) => {
    secmenConnection.query(query, (err, response) => {
        if(callback) return callback(err, response);
        if (err) return res.status(500).json({ success: false, message: err })
        res.status(200).json({ success: true, response });
    })
};

module.exports = {
    tcQuery,
    gsmQuery,
    secmenQuery
}