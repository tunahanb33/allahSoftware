const mongoose = require('mongoose');


module.exports = mongoose.connect(process.env.MONGO_URL)
    .then(m => console.log('DB Bağlantısı Başarılı..'))
    .catch(err => console.log(err))