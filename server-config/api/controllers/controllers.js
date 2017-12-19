const commonPaths = require('../../commons-paths/common-paths')
const fs = require('fs');

const date = new Date().toISOString().split('T')[0]

exports.getvocabulary = (req, res) => {
  const file = req.params.file
  res.sendFile(`${commonPaths.serviceFiles}/${file}.json`)
}

exports.savetest = (req, res) => {
  fs.writeFile(`${commonPaths.serviceFiles}/listTest/${date}.json`, JSON.stringify(req.body), (err) => {
    if (err){
      res.send({ sucess: false })
    }

    console.log("The file was succesfully saved!");
    res.send({ sucess: true })
  });
}