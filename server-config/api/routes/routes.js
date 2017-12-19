const listControllers = require('../controllers/controllers')

//API routes
module.exports = (app) => {
  app.route('/api/getvocabulary/:file')
    .get(listControllers.getvocabulary)

  app.route('/api/savetest')
    .post(listControllers.savetest)
}