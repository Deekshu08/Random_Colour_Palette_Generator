window.onload = function() {
    addColor();
}

for (let i=1; i<=21; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
    box.style.cursor = 'pointer';
    box.addEventListener('click', () => {
        console.log(box.innerHTML)
        navigator.clipboard.writeText(box.innerHTML)
        console.log("copied")
        toastr.success('now you can use it!', 'Copied To ClipBoard', {timeOut: 2000});
    });
}

const btn = document.querySelector('.btn')
const randomColorBlock = document.querySelectorAll('.box');
function RandonHexColorCode () {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for(var i=0; i<colorLength;i++){
        var randomColor = Math.floor(Math.random()*chars.length)
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

function addColor() {
    randomColorBlock.forEach(e => {
        var newColor = RandonHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}