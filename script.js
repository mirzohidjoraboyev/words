let input  = document.querySelector('input'),
    btn = document.querySelector('button'),
    randomBtn = document.querySelector('#btn'),
    list = document.querySelector('.list');


let arr = [];

function add(){
    arr.push(input.value)
    input.value = ''
}

btn.addEventListener('click', add)

console.log(arr);

function random(){
  
 let randomArry = arr[Math.floor(Math.random() * (arr.length))];
  
  li = document.createElement('li')
  li.textContent = randomArry

  list.append(li)

}

randomBtn.addEventListener('click', random)
    





let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})