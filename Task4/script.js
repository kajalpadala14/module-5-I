const background = document.createElement('div');
background.style.backgroundImage = "url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
background.style.height = '80vh';
background.style.width = '50vw';
background.style.backgroundSize ='cover';
background.style.display = 'flex';
background.style.flexDirection = 'column';
background.style.justifyContent = 'flex-end';

document.body.appendChild(background);

const heading = document.createElement('div');
heading.style.backgroundColor = '#f6c56e';
heading.style.height ='30%';
heading.style.width = '100%';
heading.style.color = '#323f4b';
heading.style.display = 'flex';
heading.style.flexDirection = 'column';
heading.style.alignItems = 'center'; 
heading.style.justifyContent = 'center'; 
heading.style.position = 'relative';
heading.style.borderTopLeftRadius = '15px';
heading.style.borderTopRightRadius = '15px';
heading.style.bottom;

const h1 = document.createElement('h1');
h1.textContent ='Happy Meals';
h1.style.fontFamily ='Bree Serif';
h1.style.margin = '0';

const p = document.createElement('p');
p.textContent = 'Discover the best foods over the 1,000 restaurants';
p.style.fontFamily = 'Roboto';
p.style.textAlign = 'center';

const button = document.createElement('button');
button.textContent ="Book Now";
button.style.backgroundColor ='#ffffff';
button.style.fontFamily ='Roboto';
button.style.color = '#323f4b';
button.style.border = 'none';
button.style.padding = '10px 20px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';


button.onmouseover = function() {
    button.style.backgroundColor = '#e0e0e0'; 
};

button.onmouseout = function() {
    button.style.backgroundColor = '#ffffff'; 
};

heading.append(h1,p,button)

background.appendChild(heading)


