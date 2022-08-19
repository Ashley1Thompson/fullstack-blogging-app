const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
// const contentRoutes = require('./contentRoutes');
// const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
// router.use('/content', contentRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;