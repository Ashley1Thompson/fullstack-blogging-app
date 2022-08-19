const router = require("express").Router();
const { Content } = require("../models/");
const withAuth = require("../utils/auth");
router.get("/", withAuth, (req, res) => {
  Content.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render("allContentAdmin", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });
  router.get("/new", withAuth, (req, res) => {
    res.render("newContent", {
      layout: "dashboard"
    });
  });
  router.get("/edit/:id", withAuth, (req, res) => {
    Content.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          res.render("editContent", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
module.exports = router;