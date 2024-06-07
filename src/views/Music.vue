<template>
    <div class="container-fluid p-0">
        <div class="row ">
            <div class="col-2">
                
                <MusicLeft></MusicLeft>
            </div>
            <div class="col-8">
                <MusicMain></MusicMain>
            </div>
            <div class="col-2">
                <MusicRight></MusicRight>
            </div>
        </div>
        <div class="row">
            <MusicBottom></MusicBottom>
        </div>
    </div>
</template>


<script setup   >
import MusicMain from "../components/MusicMain"
import MusicBottom from "../components/MusicBottom"
import MusicLeft from "../components/MusicLeft"
import MusicRight from "../components/MusicRight"

</script>