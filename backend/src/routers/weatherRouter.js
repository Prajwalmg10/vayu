const weatherController=require("../controllers/weatherController")
const router = require('express').Router();
router.get('/weather',  weatherController.fetchWeather);

router.get('/',weatherController.login)

module.exports = router;