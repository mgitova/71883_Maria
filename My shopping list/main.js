const body = document.body;
const ul = document.querySelector('#my-list') //ul


function addItem() {
    const input = document.querySelector('#input')

    const li = document.createElement('li');
    const liText = document.createElement('span');
    const liBtn = document.createElement('button');

    li.innerText = input.value;
    input.value = '';

    li.appendChild(liText);
    liText.textContent = input.value;
    li.appendChild(liBtn);
    liBtn.textContent = 'Delete';
    ul.appendChild(li);

    liBtn.onclick = function removeItem(){
        ul.removeChild(li);
    }
}
