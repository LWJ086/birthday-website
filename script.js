document.getElementById('messageButton').addEventListener('click', function() {
    var specialMessage = document.getElementById('specialMessage');
    if (specialMessage.style.display === 'none') {
        specialMessage.style.display = 'block';
    } else {
        specialMessage.style.display = 'none';
    }
});
