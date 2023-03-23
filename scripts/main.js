let myHeading = document.querySelector('h1');
alert('hello world!');
document.querySelector("h1").addEventListener("click", ()=> {
    myHeading.textContent = 'Hello world!';
    alert("别戳我，我怕疼。");
});


let myImage = document.querySelector('img');
myImage.onclick = () => { ChangeImg(1) };

function ChangeImg(itag) {
    if (itag === 1) {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/firefox-icon.png') {
            myImage.setAttribute('src', 'images/firefox2.jpg');
        } else {
            myImage.setAttribute('src', 'images/firefox-icon.png');
        }
    }
    else if (itag === 2){
        let myImage002 = document.getElementById("img002");
        let mySrc002 = myImage002.getAttribute('src');
        if (mySrc002 === 'images/firefox-icon.png') {
            myImage002.setAttribute('src', 'images/firefox2.jpg');
        } else {
            myImage002.setAttribute('src', 'images/firefox-icon.png');
        }
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
myButton.onclick = () => {
    setUserName();
};
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

