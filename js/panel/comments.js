import {
  getAndShowAllComments,
  showCommentBody,
  acceptComment,
  rejectComment,
} from "./funcs/comments.js";
window.showCommentBody = showCommentBody;
window.acceptComment = acceptComment;
window.rejectComment = rejectComment;

window.addEventListener("load", () => {
  getAndShowAllComments();
});
