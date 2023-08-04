const router = require('express').Router();
const { adsoyad, tc, gsm, aile, proService, tcSecmen, adsoyadSecmen } = require('../controller/apiController');

router.post('/adsoyad', adsoyad);
router.post('/adsoyad-secmen', adsoyadSecmen);
router.get('/pro', proService);
router.post('/tc', tc);
router.post('/tc-secmen', tcSecmen);
router.post('/gsm', gsm);
router.post('/aile', aile);

module.exports = router;