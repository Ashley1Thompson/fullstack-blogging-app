const router = require("express").Router();
const { Content, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");
router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Content.create({ ...body, userId: req.session.userId })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.put("/:id", withAuth, (req, res) => {
  Content.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
router.delete("/:id", withAuth, (req, res) => {
  Content.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;