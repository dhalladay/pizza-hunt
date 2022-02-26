const router = require('express').Router();
const { route } = require('express/lib/application');
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

router.route('/:pizzaId/:commentId/:replayId').delete(removeReply);

module.exports = router;