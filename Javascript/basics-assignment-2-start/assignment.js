const task3Element = document.getElementById('task-3');

function andy1() {
    alert('andy1 function result');
}

function andy2(name) {
    alert(name);
}

function andy3(string1, string2, string3) {
    const textCombined = `${string1} ${string2} ${string3}`;
    return textCombined;
}

andy1();
andy2();

task3Element.addEventListener('click', andy1);

const stringCombined = andy3('Hi','there','brah')
alert(stringCombined)