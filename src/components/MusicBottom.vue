<template>
    <div class="container-fluid bottomnavbar">
        <div class="row range">
            <input style="width: 100%;" type="range" min="0" max="100" value="0" class="slider">
        </div>
        <div class="row">
            <div class="col-3 p-3" style="height: 100vh;">
                <img class="mb-4" src="../assets/img/Rectangle2.png" alt="">
                <div class="ms-2" style="display: inline-block; width: 100px;">
                    <p style="font-size: 14px; display: inline; color: white">Shape of You</p>
                    <p style="font-size: 14px; color: white;">Ed Sheeran</p>
                </div>

                <svg style=" color: white;" mlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-heart mb-3" viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
            </div>
            <div class="col-6" style="height: 100vh; background-color: yellow;"></div>
            <div class="col-3 p-3" style="height: 100vh;">
                <p class="mt-3" style="font-size: 13px; color: white;">00:00/04:00</p>
                <svg style="float: right; color: white; "xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-chat-left-heart mt-2 me-2 ms-4" viewBox="0 0 16 16">
                    <path
                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                </svg>
                <input style="float: right;"type="range" min="0" max="100" value="0" class="slider mt-3 mb-3">
                <svg  style="float: right; color: white;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-volume-up mt-2 me-2" viewBox="0 0 16 16">
                    <path
                        d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                    <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                    <path
                        d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
                </svg>
            </div>
        </div>
    </div>

    <!-- <div class="valume-slider">
        <div class="volume-icon">
            <span class="material-symbols-outlined">
                volume-down
            </span>
        </div>
        <div class="range-slider">
            <input 
            type="range"
            min="0"
            max="100"
            class="slider"
            >
            <div class="progress"></div>
        </div>
    </div> -->
</template>


<script setup>


</script>

<style scoped>
.bottomnavbar {
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF0A;
    backdrop-filter: blur(15px);
}
</style>