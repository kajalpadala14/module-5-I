const bimageDiv = document.createElement('div');
bimageDiv.classList.add('bimage', 'd-flex', 'flex-column', 'justify-content-center');
bimageDiv.style.backgroundImage = "url('https://img.freepik.com/free-vector/floral-circle-frame-vector-with-flower-doodles-pink-aesthetic-background_53876-117716.jpg')";
bimageDiv.style.backgroundSize = "cover";
bimageDiv.style.height = "100vh";
bimageDiv.style.padding = "30px";
bimageDiv.style.borderColor = "aqua";
bimageDiv.style.borderWidth = "5px";
bimageDiv.style.borderStyle = "solid";

const heading = document.createElement('h1');
heading.textContent = 'Code is more than some bytes in a file';
heading.classList.add('top');
heading.style.color = 'white';
heading.style.fontFamily = 'Bree Serif';
heading.style.backgroundColor = 'black';
heading.style.padding = '15px';
heading.style.fontSize = '30px';

bimageDiv.appendChild(heading);

document.body.appendChild(bimageDiv);
