import plb from '../js/tst.js';
const analizador = new plb();
document.getElementById('snd').addEventListener('click', function () {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    var catImage = document.getElementById('cat-image');
    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    var avatar = document.createElement('div');
    avatar.className = 'cat';
    messageContainer.appendChild(avatar);
    var messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerText = 'User: ' + userInput;
    messageContainer.appendChild(messageText);
    chatBox.appendChild(messageContainer);
    document.getElementById('user-input').value = '';

    a(userInput);
});

async function a(userInput) {
    const decision = await analizador.tomarDecision(userInput);
    var chatBox = document.getElementById('chat-box');
    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    
    var avatar = document.getElementById('avat');
   

    // var randomAvatar = Math.floor(Math.random() * 3) + 1;
    // avatar.src = `../imgs/avatar/avatar${randomAvatar}.jpg`;
    var messageText = document.createElement('div');
    messageText.className = 'message-text';

    messageText.innerText = 'KinglyShade:' + decision;

    messageText.style.backgroundColor = 'rgb(76, 127, 175)';

    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageText);

    chatBox.appendChild(messageContainer);
}
