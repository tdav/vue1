<template>
    <div class="p-0 m-0 " style="background-color: black;">
        <div class="container p-0" style="background-color: #212120;">
            <div class="row p-0">
                <div class="col-2 p-0">
                    <MusicLeft></MusicLeft>
                </div>
                <div class="col-8 p-0">
                    <MusicMain></MusicMain>
                </div>
                <div class="col-2 p-0">
                    <MusicRight></MusicRight>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <MusicBottom></MusicBottom>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import MusicMain from "../components/MusicMain"
import MusicBottom from "../components/MusicBottom"
import MusicLeft from "../components/MusicLeft"
import MusicRight from "../components/MusicRight"

</script>