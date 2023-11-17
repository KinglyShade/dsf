import PLB from '../js/tst.js';

document.addEventListener('DOMContentLoaded', (event) => {
    const analizador = new PLB();

    document.getElementById('custom-alert').style.display = 'block';

    window.closeAlert = function() {
        document.getElementById('custom-alert').style.display = 'none';
        var nlc = window.localStorage.getItem('nombre')
if(!nlc){
    showNamePrompt();
}
    
    };

    function showNamePrompt() {
        document.getElementById('name-prompt').style.display = 'block';
    }

    window.saveUserName = function() {
        var userName = document.getElementById('user-name-input').value.trim();
        if (userName) {
            window.localStorage.setItem('nombre', userName)
            document.getElementById('name-prompt').style.display = 'none';
            document.getElementById('user-name-display').innerText = `Bienvenido, ${userName}!`;
            document.getElementById('name-animation').style.display = 'block';

            document.getElementById('video-background').style.display = 'block';
            setTimeout(() => {
                document.getElementById('user-name-display').style.display = 'none';
                document.getElementById('user-name-display').innerText = ``;
                document.getElementById('name-animation').style.display = 'none';

                document.getElementById('video-background').style.display = 'none';
            }, 5000);
        }
    };

    document.getElementById('user-input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('snd').addEventListener('click', sendMessage);

    function sendMessage() {
        var userInput = document.getElementById('user-input').value.trim();

        if (!userInput) {
            return;
        }

        var chatBox = document.getElementById('chat-box');
        var messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        // var avatar = document.getElementById('avat');

        var messageText = document.createElement('div');
        messageText.className = 'message-text';
        var nlc = window.localStorage.getItem('nombre')
        if(!nlc){
            messageText.innerText = 'Usuario: ' + userInput;

        }else{
            messageText.innerText = `${nlc}: ` + userInput;

        }

        // messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageText);
        chatBox.appendChild(messageContainer);

        document.getElementById('user-input').value = '';

        a(userInput);
    }

    async function a(userInput) {
        const decision = await analizador.tomarDecision(userInput);
        var chatBox = document.getElementById('chat-box');
        var messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        // var avatar = document.getElementById('avat');

        var messageText = document.createElement('div');
        messageText.className = 'message-text';
        messageText.innerText = 'KinglyShade: ' + decision;
        messageText.style.animation = 'slideInRight 0.5s ease-in-out';

        messageText.style.backgroundColor = 'rgb(76, 127, 175)';
        setTimeout(() => {
        // messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageText);

        chatBox.appendChild(messageContainer);
        },1000);
    }
});
