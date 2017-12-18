const commonPaths = require('../../commons-paths/common-paths')

exports.getvocabulary = (req, res) => {
  const file = req.params.file
  res.sendFile(`${commonPaths.serviceFiles}/${file}.json`)
}