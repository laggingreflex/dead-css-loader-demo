import { paragraph } from './css/style.css';

var body = `<p class="${ paragraph }">Vestibulum volutpat pretium libero.</p>`;

var app = document.getElementById('app');
app.innerHTML = body;
