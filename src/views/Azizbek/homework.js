// 1. Exercise

// 1. document.getElementById билан веб-саҳифадаги <h1> элементни танланг.

const h1 = document.getElementById('domH1');

// 2. document.querySelector билан <p> элементни танланг.

const h3 = document.querySelector('.exercise');

// 3. document.querySelectorAll билан барча <li> элементларни танлан

const li = document.querySelectorAll('li');

// 4. textContent билан <h1> элементнинг мазмунини 

const h1TextContext = document.querySelector('#textContent');

h1TextContext.textContent = 'h1TextContent'

// 5. innerHTML билан <p> элементнинг мазмунини HTML-код орқали ўзгартиринг.

const pInnerHTML = document.querySelector('.innerHTML');

pInnerHTML.innerHTML = `<b>bold innerHTML</b>`

// 6. style билан <li> элементнинг стилларини (масалан, рангини) ўзгартиринг.

const lists = document.querySelector('.style')

lists.style.backgroundColor = 'red';
lists.style.color = 'white';

// 7. setAttribute билан <p> элементга title атрибутини қўшинг.

const setAttribute = document.querySelector('.atr');

setAttribute.setAttribute('id', 'setAttribute');

// 8. getAttribute билан <a> элементнинг href атрибути қийматини олинг ва шу қийматни веб-саҳифада кўрсатинг.

const getAttribute = document.querySelector('#href');

getAttribute.getAttribute('href');

console.log(getAttribute);

// 9. addEventListener ёрдамида <button> элементга click ҳодисаси қўшинг ва унга <h1> элементнинг мазмунини ўзгартирувчи функцияни бириктиринг.

const onClick = document.querySelector('#click');
const deleteH1 = document.getElementById('event')

function deleteList() {
    deleteH1.remove()
}

onClick.addEventListener('click', deleteList)


// 10. mouseover ҳодисасини <li> элементга қўшинг ва унга рангини ўзгартирувчи функцияни бириктиринг.

const mouseover = document.querySelector('#mouseover');
const colorUl = document.querySelector('.list-color');

function mouseoverClick() {
    // mouseover.style.fontSize = '30px';
    const li = document.querySelector('li');
    li.innerHTML = `<li>Light</li>`
    colorUl.appendChild(li)

}

mouseover.addEventListener('mouseover', mouseoverClick);

// 11. input ҳодисасини <input> элементга қўшинг ва унга <p> элементнинг мазмунини ўзгартирувчи функцияни бириктиринг.

const input = document.querySelector('#input');

function inputP() {
    const pElement = document.createElement('p');

    pElement.innerHTML = input.value
    document.body.appendChild('pElement')
}

input.addEventListener('click', inputP)