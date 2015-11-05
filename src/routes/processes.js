let express = require('express');

let router = express.Router();

async function kill(req, res) {
  await req.adb.kill(req.params.pid);
  res.sendStatus(200);
}

router.delete('/:pid', kill);

module.exports = router;