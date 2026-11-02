import {
  getAndShowAllComments,
  showCommentBody,
  acceptComment,
  rejectComment,
  answerToComment,
} from "./funcs/comments.js";
window.showCommentBody = showCommentBody;
window.acceptComment = acceptComment;
window.rejectComment = rejectComment;
window.answerToComment = answerToComment;
window.addEventListener("load", () => {
  getAndShowAllComments();
});
