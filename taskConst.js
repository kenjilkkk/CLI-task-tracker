function Task(str) {
  this.description = str;
  this.status = null;
  this.createdAt  = new Date();
  this.id = 0;
  this.updatedAt = null;

}
module.exports = { Task }