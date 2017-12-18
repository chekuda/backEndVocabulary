const listControllers = require('../controllers/controllers')

//API routes
module.exports = (app) => {
  app.route('/api/getvocabulary/:file')
    .get(listControllers.getvocabulary)
}