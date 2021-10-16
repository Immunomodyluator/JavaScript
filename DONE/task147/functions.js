export const formatTaskList = (tasks) => {
  let words = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === 'DONE') {
      words.push('\u2705' + tasks[i].title);
    } else {
      words.push('\u274c' + tasks[i].title);
    }
  }
  return words;
}