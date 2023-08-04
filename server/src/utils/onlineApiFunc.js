const axios = require('axios');

const onlineApi = (queries, res) => {
    axios(`https://i-api.net/api.aspx?uuid=fbbad1cb-sjsj-31-b145-52c100f0a674&module=${queries.module}&tc=${queries.tc}`)
    .then(response => res.status(200).json({ success: true, data: response.data.data }))
    .catch(err => res.status(500).json({ success: false, message: err.response.data }))
}

module.exports = onlineApi;