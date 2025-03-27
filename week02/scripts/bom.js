/*const input = document.querySelector('#favchap');
const output = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElemnt('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
// if you need to include HTML tags, then you would use innerHTML.
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
*/


const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please enter a chapter name.');
        input.focus();
        return;
    }

    const li = document.createElement('li'); // Fix typo: createElement
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.value = ''; // Clear input
    input.focus(); // Return focus to input
});
