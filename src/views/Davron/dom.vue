<template>
    <div class="container">

        <div class="form-group" id="div1">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <button class="btn btn-primary" @click="onSave"> KURISH </button>

    </div>
</template>

<script setup>


function onSave() {

    var va = document.getElementById('div1')


    va.style.display = 'none';


    console.log('-------------------------------------');


    const el = document.querySelector(".form-control");
    console.log(el);

    console.log('-------------------------------------');

    alert('aa')

    const elall = document.querySelectorAll(".form-group");
    console.log(elall);

    for (let i = 0; i < elall.length; i++) {
        const e = elall[i];

        e.style.backgroundColor = 'green';
        //e.value = 'yangi';

    }

}


</script>