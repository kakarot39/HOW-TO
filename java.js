document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('#sidebar a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
