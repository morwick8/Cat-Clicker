var clickCount = 0;

function catClick() {
    clickCount = clickCount + 1;
    document.getElementById('clicks').innerHTML = clickCount;
    console.log('pushed new click clickCount');
};


var elem = document.getElementById('target');
console.log(elem);
elem.addEventListener('click', catClick , false);
