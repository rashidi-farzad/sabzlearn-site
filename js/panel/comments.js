import { getAndShowAllComments, showCommentBody } from "./funcs/comments.js";
window.showCommentBody = showCommentBody;

window.addEventListener("load", () => {
  getAndShowAllComments();
});
