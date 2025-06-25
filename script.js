const startBtn = document.getElementById('start-btn');
const taskList = document.getElementById('task-list');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript.trim();
  if (transcript) addTask(transcript);
};

startBtn.addEventListener('click', () => {
  recognition.start();
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  taskList.appendChild(li);
}
