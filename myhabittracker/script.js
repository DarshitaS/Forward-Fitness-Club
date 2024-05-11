const habitList = document.getElementById('habit-list');
const addHabitForm = document.getElementById('add-habit-form');
const habitNameInput = document.getElementById('habit-name');

// Function to create a new habit element
function createHabitElement(habitName) {
  const habitItem = document.createElement('div');
  habitItem.classList.add('habit-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  habitItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.innerText = habitName;
  habitItem.appendChild(label);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.addEventListener('click', () => {
    habitList.removeChild(habitItem);
    // Update local storage (optional)
  });
  habitItem.appendChild(deleteButton);

  return habitItem;
}

// Function to handle form submission
addHabitForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const habitName = habitNameInput.value.trim();

  if (habitName) {
    const habitItem = createHabitElement(habitName);
    habitList.appendChild(habitItem);
    habitNameInput.value = ''; // Clear input field

    // Save habit to local storage (optional)
  }
});

// Load habits from local storage (optional)
const storedHabits = localStorage.getItem('habits');
if (storedHabits) {
  const habits = JSON.parse(storedHabits);
  habits.forEach((habit) => {
    const habitItem = createHabitElement(habit);
    habitList.appendChild(habitItem);
  });
}
