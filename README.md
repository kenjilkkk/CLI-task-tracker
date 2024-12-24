<h1>Task Tracker</h1>

<p>A simple task tracker built with Node.js to help you manage and organize your tasks efficiently. This project is inspired by the task-tracker project from roadmap.sh.</p>

<h2>Requirements</h2>

<p>Before running the project, you need to have <a href="https://nodejs.org/">Node.js</a> installed on your machine.</p>

<p>You can check if Node.js is installed by running the following command in your terminal:</p>

<pre><code>node -v</code></pre>

<p>If it's not installed, you can download and install it from <a href="https://nodejs.org/">nodejs.org</a>.</p>

<h2>Installation</h2>

<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/kenjilkkk/CLI-task-tracker.git</code></pre>
  </li>
  <li>Navigate into the project folder:
    <pre><code>cd seu-repositorio</code></pre>
  </li>
  <li>Make sure you have Node.js installed.</li>
  <li>Run the following command to ensure everything is set up correctly:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>Usage</h2>

<p>To interact with the task tracker, use the following command:</p>

<pre><code>node index.js &lt;option&gt; &lt;id&gt; &lt;task description&gt;</code></pre>

<p>Where:</p>
<ul>
  <li><code>&lt;option&gt;</code> is one of the following actions you can perform:
    <ul>
      <li><code>add</code>: Adds a new task.</li>
      <li><code>delete</code>: Deletes an existing task by its ID.</li>
      <li><code>update</code>: Updates an existing task's description by its ID.</li>
      <li><code>list</code>: Lists all tasks.</li>
      <li><code>mark-in-progress</code>: Marks a task as "in progress".</li>
      <li><code>mark-todo</code>: Marks a task as "to do".</li>
      <li><code>mark-done</code>: Marks a task as "done".</li>
      <li><code>list todo</code>: Lists only tasks with the "to do" status.</li>
      <li><code>list in-progress</code>: Lists only tasks with the "in progress" status.</li>
      <li><code>list done</code>: Lists only tasks with the "done" status.</li>
    </ul>
  </li>
</ul>

<p>Example usage:</p>
<ul>
  <li>Add a task:
    <pre><code>node index.js add "Complete the Node.js project"</code></pre>
  </li>
  <li>Delete a task:
    <pre><code>node index.js delete 1</code></pre>
  </li>
  <li>Update a task:
    <pre><code>node index.js update 1 "Complete the Node.js project with tests"</code></pre>
  </li>
  <li>List all tasks:
    <pre><code>node index.js list</code></pre>
  </li>
  <li>Mark a task as in progress:
    <pre><code>node index.js mark-in-progress </code></pre>
  </li>
  <li>List only tasks that are "to do":
    <pre><code>node index.js list todo</code></pre>
  </li>
</ul>

<h2>Folder Structure</h2>

<p>The tasks are stored as JSON files in the <code>tasks/</code> folder. Each task has a unique ID and a status (to do, in progress, done).</p>

<h2>roadmap.sh url</h2>

<p>https://roadmap.sh/projects/task-tracker</p>
