document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ay').addEventListener('click',function(event){
        event.preventDefault(); 
        window.location.href = '../../ayuda/index.html'
    })
    document.getElementById('imgp').addEventListener('click', function(){
        // window.location.href = '../imgua/index.html'
        alert('Opcion desavilidata temporalmente ')
    })
})
