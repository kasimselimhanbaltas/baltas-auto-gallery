<template>
  <body class="mybody">
    <div class="container-fluid">
      <audio autoplay loop preload id="mymusic">
        <source src="../assets/music.mp3" type="audio/mpeg">
      </audio>
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/a.mp4" type="video/mp4">
      </video>
      <div style="line-height: 120px;" id="text" class="text1">Welcome To <br> Baltaş Auto Gallery!!!</div> 
      <div id="text" class="text1 mt-5" style="font-size:3em;">You can find 2706 car models of 255 brands and all their generations here. <br/>
        Feel free to navigate from the topbar.</div>   
    </div>
  </body>

</template>

<script>

export default {
  setup(){

  }
}

</script>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

video{
  position: absolute;
  left: 0;
  width: 98.9vw;
  top: -50px;
}
.mybody{
  float: top;
  font-family: 'Montserrat', sans-serif;
  background:ivory;
  width:100%;
  height:100vh;
  padding:0;
  margin-top: 10px;
  overflow-x: hidden;

}
#text{
  text-align:center;
  position:relative;
  top: 0;
  font-size:7em;
  
}
.text1{
  color: white;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

</style>
  