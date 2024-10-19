const container = document.createElement('div');
document.body.appendChild(container)

container.style.backgroundImage = `url('task1.avif')`;
container.style.backgroundSize = "cover";
container.style.backgroundRepeat='no repeat';
container.style.height = "600px";
container.style.padding = "20px";

container.classList.add("div-element");

const heading =document.createElement('h1')
heading.textContent = 'TodoList'
heading.style.color = 'blue';
heading.style.textAlign = 'center';
container.appendChild(heading);


const para = document.createElement('p');
para.textContent = 'Each day I will accomplish one thing on my todo list.'
para.style.fontSize = '20px';
para.style.textAlign = 'justify';


const head1 = document.createElement('h4')
head1.textContent = 'Read Book';
head1.style.fontSize ='18px';
head1.style.textAlign = 'center';

const  para2 = document.createElement('p');
para2.textContent = "I don't think that the human race will survive the next thounsad years,unless we spead into space. There are too many accidents then can befall life on a single plant.But i,m an optimist...";
para2.style.fontSize = '17';

const btn = document.createElement('button');
btn.textContent = 'clink me!';
btn.style.color = 'white';
btn.style.backgroundColor = "black";

const para3 = document.createElement('p');
para3.textContent = "skip introduction";
para3.style.color = 'blue';
para3.style.textDecoration ='underline';

container.append(para, head1, para2, btn, para3);
