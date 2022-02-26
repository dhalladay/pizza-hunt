const router = require('express').Router();
const { route } = require('express/lib/application');
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);

module.exports = router;