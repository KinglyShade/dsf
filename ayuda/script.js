import PLB from '../js/tst.js';

document.addEventListener('DOMContentLoaded', (event) => {
    var id = window.localStorage.getItem('nombre');
    var imgElement = document.getElementById('img');
    var imgSrc = `../imgua/uploads/${id}/${id}.jpg`;
        imageExists(imgSrc, function(exists) {
        if (exists) {
            imgElement.src = imgSrc;
        } else {
            imgElement.src = '../imgua/uploads/null/null.jpg';
        }
    });
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
    
        var avatar = document.createElement('img');
        avatar.className = 'avatar';
        var id = window.localStorage.getItem('nombre');
        var imgSrc = `../imgua/uploads/${id}/${id}.jpg`;
            imageExists(imgSrc, function(exists) {
            if (exists) {
                avatar.src = imgSrc;
            } else {
                avatar.src = '../imgua/uploads/null/null.jpg';
            }
        });
    
        var messageText = document.createElement('div');
        messageText.className = 'message-text';
        var nlc = window.localStorage.getItem('nombre');
        if (!nlc) {
            messageText.innerText = 'Usuario: ' + userInput;
        } else {
            messageText.innerText = `${nlc}: ` + userInput;
        }
    
        messageContainer.appendChild(avatar);
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
    
        var avatar = document.createElement('img');
        avatar.id = 'avats';
        avatar.className = 'avatar';
        var randomAvatar = Math.floor(Math.random() * 9 + 1);
        if (randomAvatar === 8 && Math.random() < 0.001) {
            randomAvatar = Math.floor(Math.random() * 8) % 7 + 1;
        }
        avatar.src = `../img/avatar/avatar${randomAvatar}.png`;
        
        var messageText = document.createElement('div');
        messageText.className = 'message-text';
        messageText.innerText = 'KinglyShade: ' + decision;
        messageText.style.animation = 'slideInRight 0.5s ease-in-out';
        messageContainer.style.margin = '10px';
        messageText.style.backgroundColor = 'rgb(76, 127, 175)';
    
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageText);
    
        setTimeout(() => {
            avatar.style.display = 'block';
            chatBox.appendChild(messageContainer);
        }, 1000);
    
      
    }
    function imageExists(url, callback) {
        var img = new Image();
        img.onload = function() {
            callback(true);
        };
        img.onerror = function() {
            callback(false);
        };
        img.src = url;
    }
});
