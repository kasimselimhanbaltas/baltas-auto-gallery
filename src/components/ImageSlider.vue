<template>
  <div class="container-fluid">
    <div class="row">
        <div id="carouselExampleIndicators" class="carousel slide custom2"  data-interval="false" >
          <div class="carousel-inner container align-items-center height-1d" >
            <div id="mycarousel" class="custom1" v-for="(image, index) in getCarImages" :key="image.imageurl" :class="getCarouselClass(index)" >
              <img :src="image.imageurl" class="myh-1 custom1">
            </div>
        </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <hr class="mt-3">

    <div class="row">
      <div class="mx-1 mt-3 d-flex flex-wrap">
        <div v-for="image in getCarImages" :key="image.model" class="">
          <div class="justify-content-center align-items-center justify-content-center">
            <img :src="image.imageurl" 
              class="img-fluid shadow-1-strong w-100 p-1"
              style="height: 70px;">
          </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    getCarouselClass(index){
      if (index===0)
        return "carousel-item active align-content-end h-100" 
      else 
      return "carousel-item"
    }
  },
  computed: {
    ...mapGetters(['getCarImages'])
  }

}
</script>

<style scoped lang="scss">

@media only screen and (max-width: 600px) {
  .custom1 {
    max-height: 200px;
    max-width: 550px;
  }
  .custom2 {
    height:200px
  }
}
@media only screen and (max-width: 400px) {
  .custom1 {
    max-height: 50px;
  }
  .custom2 {
    height:50px
  }
}
@media only screen and (min-width: 601px) {
  .custom1 {
    height: 300px;
  }
  .custom2 {
    height: 300px
  }
}

</style>