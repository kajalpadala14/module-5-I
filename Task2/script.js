const backgroundDiv = document.createElement('div');
backgroundDiv.style.backgroundImage = "url('https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png')";
backgroundDiv.style.height = "80vh";
backgroundDiv.style.width = "80vw"
backgroundDiv.style.display = "flex";
backgroundDiv.style.marginLeft = '20vh';
backgroundDiv.style.flexDirection = "column";
backgroundDiv.style.alignItems = "center";
backgroundDiv.style.justifyContent = "center";


const heading = document.createElement('h1');
heading.textContent = 'Chat';
heading.style.color = '#ffffff';
heading.style.backgroundColor = 'blue';
heading.style.fontSize = '20px';
heading.style.textAlign = 'center';
heading.style.fontFamily = 'Roboto, sans-serif';
heading.style.fontWeight = 'bold';
heading.style.padding = '13px';
heading.style.width = '80%';


const wholeDiv = document.createElement('div');
wholeDiv.style.padding = '14px';
wholeDiv.style.color = '#ffffff';
wholeDiv.style.fontFamily = 'Roboto, sans-serif';
wholeDiv.style.fontSize = '12px';
wholeDiv.style.width = '80%'; 
wholeDiv.style.marginTop = '20px'; 
wholeDiv.style.borderRadius = '12px'; 

const messages = [
    { type: 'text-sent', content: 'Hello, how are you?' },
    { type: 'text-rec', content: 'Hi Varakumar, I am good. How are you?' },
    { type: 'text-sent', content: "I'm fine. I am learning HTML and CSS." },
    { type: 'text-rec', content: 'HTML and CSS?' },
    { type: 'text-sent', content: 'Yes, by doing projects parallelly, I am learning my college studies.' },
    { type: 'text-rec', content: 'Awesome!' },
    { type: 'text-sent', content: 'Can I call you?' },
];


function createMessageElement(type, content) {
    const p = document.createElement('p');
    p.textContent = content;

    if (type === 'text-rec') {
        p.style.backgroundColor = '#52606d';
        p.style.padding = '12px';
        p.style.borderTopLeftRadius = '12px';
        p.style.borderTopRightRadius = '12px';
        p.style.borderBottomRightRadius = '12px';
        p.style.textAlign = 'left';
        p.style.margin = '5px 0'; 
    } else if (type === 'text-sent') {
        p.style.backgroundColor = '#47a3f3';
        p.style.padding = '12px';
        p.style.borderTopLeftRadius = '12px';
        p.style.borderTopRightRadius = '12px';
        p.style.borderBottomRightRadius = '12px';
        p.style.textAlign = 'right';
        p.style.margin = '5px 0'; 
    }

    return p;
}

messages.forEach(message => {
    const messageElement = createMessageElement(message.type, message.content);
    wholeDiv.appendChild(messageElement);
});


backgroundDiv.appendChild(heading);
backgroundDiv.appendChild(wholeDiv);


document.body.appendChild(backgroundDiv);
