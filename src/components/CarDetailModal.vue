<template>
    <!-- Modal -->
<div class="modal fade justify-content-center align-items-center"  id="detailsModal" data-bs-keyboard="false" 
tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg container justify-content-center align-items-center">
    <div class="modal-content container " >
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{{getCarDetail.make}} {{getCarDetail.model}} {{getCarDetail.generation}}'s Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body container row justify-content-left p-0 ms-0">
        <div class="container row">
        <ul v-for="(value, key) in getCarDetail" :key="value" class="list-group col-6 ">
            <div class="list-group-item h-100 ">
              <p class="text-break fs-6 m-0" style="float:left">{{key}}:</p>
              <p class="text-break fs-6 m-0" style="float:right">{{value}}</p>
            </div>
        </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{

    }
  },
    name: 'CarDetailModal',
    computed: {
      ...mapGetters([ "getCarDetail", "getCarImages"]),
      carDetail: function(){
        if (this.getCarDetail.idtrim != this.$route.params.carid){
          this.getDetails()
          return this.getCarDetail
        }
        return this.getCarDetail
      },
    }
}
</script>


<style scoped>
.modal-title{
  margin-left: auto;
}
.modal-body .json-viewer {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  text-align: left;
  padding: 200px;
  border-radius: 10px;
}
.my-awesome-json-theme {
  word-break: 'break-word';
  background: rgb(217, 216, 216);
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;
}

</style>