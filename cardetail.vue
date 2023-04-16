<template>
  <div style="margin-top:10px" class="row mx-3">
    <!-- Gallery -->
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
      :src="getCarImages[0].imageurl"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />

      <img
        :src="getCarImages[1].imageurl"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
      <img
      :src="getCarImages[2].imageurl"

        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
      <img
      :src="getCarImages[3].imageurl"

        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <ul class="list-group">
        <li class="list-group-item py-1">
          <span style="float:left">Make</span>
          <span style="float:right">{{getCarDetail.make}}</span>
        </li>
        <li class="list-group-item py-1">
          <span style="float:left">Model</span>
          <span style="float:right">{{getCarDetail.model}}</span>
        </li>
        <li class="list-group-item py-1">
          <span style="float:left">Year</span>
          <span style="float:right">{{getCarDetail.yearfrom}}-{{getCarDetail.yearto}}</span>
        </li>
        <li class="list-group-item py-1">
          <span style="float:left">Generation: </span>
          <span style="float:right">{{getCarDetail.generation}}</span>
        </li>
      
        
      </ul>

      <img
          :src="getCarImages[4].imageurl"

        class="w-100 shadow-1-strong rounded mb-4 mt-4"
        alt="Waves at Sea"
      />

      <img
          :src="getCarImages[5].imageurl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
      />

    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
          :src="getCarImages[6].imageurl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
      />
      <img
          :src="getCarImages[7].imageurl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
      />
      <img
          :src="getCarImages[8].imageurl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
      />
      <img
          :src="getCarImages[9].imageurl"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
      />
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { 

   },
    data() {
        return{ 
          model: this.$route.params.model,
          generation: this.$route.params.generation
        }
    },
    async created(){
      let model = this.model
      let generation = this.generation
      let payload = {0:model,1:generation}
      await this.fetchCarDetail(payload)
      await this.fetchCarImages(payload)

    },
    computed: {
        ...mapGetters(['getCarDetail', 'getCarImages']),
    },
    methods: {
        ...mapActions(['fetchCarDetail', 'fetchCarImages'])

    }

}
</script>

<style>
img {
  border:solid;
}

</style>