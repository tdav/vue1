<template>
    <h1 class="domH1">DOM Homework</h1>

    <h3 class="exercise">Exerscise 2</h3>

    <ul>
        <li>Exercise 1</li>
        <li>Exercise 2</li>
        <li>Exercise 3</li>
        <li>Exercise 4</li>
        <li>Exercise 5</li>
    </ul>

    <h1 id="textContent">TextContent</h1>

    <p class="innerHTML">innerHTML</p>

    <ul class="list-color">
        <li class="style">Red</li>
        <li>Blue</li>
        <li>Black</li>
        <li>Grey</li>
        <li>Blue</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Broow</li>
    </ul>

    <p class="atr">setAttribute</p>

    <a id="href" href="huxn"></a>


    <h1 id="event">Event</h1>
    <button class="d-block btn  btn-danger" onclick="deleteList()" id="click">Click</button>

    <span class="btn btn-info" id="mouseover" onclick="mouseoverClick()">
        mouseover
    </span>

    <!-- <p id="inputValue"></p>/ -->

    <input class="d-block" type="text" id="input" onchange="inputP()">
  </template>
  
  <script setup>
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
  </script>
  