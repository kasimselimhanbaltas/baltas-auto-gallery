<template>
  <div class="container-fluid" :key="componentKey">
    <div class="row mx-3">
      <!-- Gallery -->
      <div class="col-xl-7 col-md-12 mb-4 mb-lg-0">
        <div class="row w-100 d-block border-end border-dark p-3">
          <ImageSlider></ImageSlider>
        </div>
      </div>

      
      <div class="col-xl-5 mb-4 mb-lg-0">
        <ul class="list-group">
          <li class="list-group-item py-1">
            <span style="float:left">Make</span>
            <span style="float:right">{{carDetail.make}}</span>
          </li>
          <li class="list-group-item py-1">
            <span style="float:left">Model</span>
            <span style="float:right">{{carDetail.model}}</span>
          </li>
          <li v-if="carDetail.yearfrom || carDetail.yearto" class="list-group-item py-1">
            <span style="float:left">Year</span>
            <span style="float:right">{{carDetail.yearfrom}} - {{carDetail.yearto}}</span>
          </li>
          <li v-if="carDetail.generation" class="list-group-item py-1">
            <span style="float:left">Generation: </span>
            <span style="float:right">{{carDetail.generation}}</span>
          </li>
          <li v-if="carDetail.series" class="list-group-item py-1">
            <span style="float:left">Type: </span>
            <span style="float:right">{{carDetail.series}}</span>
          </li>
          <li v-if="carDetail.transmission" class="list-group-item py-1">
            <span style="float:left">Transmission: </span>
            <span style="float:right">{{carDetail.transmission}}</span>
          </li>
          <li v-if="carDetail.trim" class="list-group-item py-1">
            <span style="float:left">Trim: </span>
            <span style="float:right">{{carDetail.trim}}</span>
          </li>
          <li v-if="carDetail.number_of_seats" class="list-group-item py-1">
            <span style="float:left">Number of seats: </span>
            <span style="float:right">{{carDetail.number_of_seats}}</span>
          </li>
          <li v-if="carDetail.engine_hp" class="list-group-item py-1">
            <span style="float:left">Engine HP: </span>
            <span style="float:right">{{carDetail.engine_hp}}</span>
          </li>

        </ul>
        <button data-bs-toggle="modal" data-bs-target="#detailsModal" class="btn btn-info mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mb-1 me-1" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          More Details
        </button>

      
        <div v-if="getOldCarList.length > 1">
          <div class="row mt-2">
            <h3>All Generations of {{carDetail.make}} {{carDetail.model}}</h3>
            <div class="row mx-1 mt-2">
              <div v-for="car in getOldCarList" :key="car.idtrim" class="col-2">
                <div class="col justify-content-center align-items-center">
                  <div @click="imageClicked(car)" class="btn border-0 w-100 p-0" style="text-decoration: none; color: inherit;">
                    <img v-lazy="car.imageurl" 
                      class="img-fluid shadow-1-strong rounded mb-1 w-100">
                    <p class="mt-0">{{car.generation}}</p>
                  </div>
                </div>
              </div>
            </div>
          <div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="footer">
      
    </div>
    <CarDetailModal></CarDetailModal>

  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CarDetailModal from '../components/CarDetailModal.vue'
import ImageSlider from '../components/ImageSlider.vue'



export default {
  components: {
    CarDetailModal,
    ImageSlider,
},
    data() {
        return{ 
          componentKey: 0,
        }
    },
    created(){
      this.currentId = this.$route.params.carid
      this.getDetails()
    },
    computed: {
      carDetail: function(){
        if (this.getCarDetail.idtrim != this.$route.params.carid){
          this.getDetails()
          return this.getCarDetail
        }
        return this.getCarDetail
      },
      ...mapGetters(['getCarDetail', 'getCarImages','getSelectedCarModel','getSelectedCarGeneration', 'getOldCarList']),
    },
    methods: {
      forceRerender() {
      this.componentKey += 1;  
      console.log("asdasldkfjasdlfgkjad")
    },
      async getDetails() {
        let carid = this.$route.params.carid
        let payload = {0:carid,}
        await this.fetchCarDetail(payload)
        await this.fetchOldCars(this.getCarDetail.model)
        await this.fetchCarImages(payload)
        console.log("end")
        await this.forceRerender();
      },

      imageClicked(car){
        console.log("clicked to car id: ",car.idtrim )
        this.$router.push(`/cars/${car.idtrim}/`)
        this.getDetails()

      },
      ...mapActions(['fetchCarDetail', 'fetchCarImages', 'fetchOldCars'])

    }

}
</script>

<style scoped>
img {
  border:solid;
}




</style>