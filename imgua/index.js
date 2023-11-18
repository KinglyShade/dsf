document.getElementById("uploadForm").addEventListener("submit", function(event) {
    const image = document.getElementById('image');
    const imageInput = document.getElementById('fileInput');
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            image.style.display = 'block';
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
    event.preventDefault();
  

    var userId = localStorage.getItem('nombre');

    var formData = new FormData(this);
    

    formData.append('userId', userId);

    fetch('index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});