const greeting = document.getElementById('greeting');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  greeting.textContent = greeting.textContent === 'Hello World'
    ? '你好，世界！'
    : 'Hello World';
});
