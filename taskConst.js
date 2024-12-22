function Task(str) {
  this.description = str;
  this.status = null;
  this.createdAt  = new Date();
  this.id = 0;
  this.updatedAt = null;

  function update(tsk) {
    this.updatedAt = new Date();
    this.taskName = tsk;
  }
}
module.exports = { Task }