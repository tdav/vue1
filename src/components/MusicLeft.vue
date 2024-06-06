<template>
    <div class="container-fluid p-0 qwer" style="background-color: #212120; height: 100vh; overflow-x: auto;">
            <div class="p-4 pb-3">
              <img src="../assets/img/Logo.png" alt="logo" class="img-logo123 p-0">
            </div>
            <div class="list-group ps-4">
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
              <img src="../assets/img/home.png" alt="1" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p class="mnb">Home</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/discover.png" alt="2" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Discover</p>
              </a>


              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/radio.png" alt="3" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Radio</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
               <img src="../assets/img/albums.png" alt="4" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Albums</p>
              </a>

              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/podcast.png" alt="5" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Podcast</p>
              </a>
            </div>

            <p class="mt-2 ms-5" style="color: rgba(255, 255, 255, 0.72);  font-size: 12px; font-weight: 700; line-height: 16.39px; letter-spacing: 0.16em; text-align: left;">
              LIBRARY
            </p>

            <div class="list-group ps-4">
              <a href="#" class="list-group-item list-group-item-action cvbn">
              <img src="../assets/img/music-square-add.png" alt="1" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Recently Added</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/Favorite.png" alt="2" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Favorite Songs</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/local.png" alt="3" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Local Files</p>
              </a>
            </div>

            <p class="mt-4 ms-5" style="color: rgba(255, 255, 255, 0.72);  font-size: 12px; font-weight: 700; line-height: 16.39px; letter-spacing: 0.16em; text-align: left;">
              PLAYLIST 
              <button style="width: 16px; height: 16px; top: 587px; left: 222px; gap: 0px; opacity: 0px; background-color: #212121; color:white;  margin-left: 5rem;" class="ms-">+</button>
            </p>

            <div class="list-group ps-4">
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
              <img src="../assets/img/playlist.png" alt="1" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Lo-fi Music</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/playlist.png" alt="1" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Best of Jon Bovi</p>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action cvbn">
                <img src="../assets/img/playlist.png" alt="1" style="width: 24px; height: 24px; gap: 0px; opacity: 0px; margin-right:8px;">
              <p>Best of Jon Mayer</p>
              </a>
              <a style="height: 100px;"></a>

            </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
    .img-logo123 {
        padding-top: 2.2rem;
        padding-left: 1.2rem;
        
    }

    .qwer {
        height: 139vh;
    }

    .cvbn {
      background-color: #212121;
      color: rgba(255, 255, 255, 0.64);
      border: none;
      display: inline-block;
      height: 48px;
    }
    .cvbn:hover {
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
      color: white;
    }

    .cvbn:active {
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    } 

    .cvbn:focus{
      background: linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
      color: white;
    }


</style>