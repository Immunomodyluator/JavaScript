export const startProgressBar = (progressBar, delay) => {
  const timer = setInterval(() => {
    progressBar.tick();
    if (progressBar.complete) {
      clearInterval(timer);
      console.log('DONE!');
    }
  }, delay);
}