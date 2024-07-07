function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habitValue = habitInput.value.trim();
    
    if (habitValue === '') {
        alert('Please enter a habit');
        return;
    }

    const habitList = document.getElementById('habitList');
    const li = document.createElement('li');
    li.textContent = habitValue;
    
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    habitList.appendChild(li);
    habitInput.value = '';
}