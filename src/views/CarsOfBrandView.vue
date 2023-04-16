<template>
  
    <div class="container">
      <div class="row">
        <h1 class="mt-0">{{$route.params.brand}}</h1>

        <div class="row d-flex justify-content-between align-items-center p-0">
          <div class="col-5 ">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><button class="page-link" @click="prevPage()">Previous</button></li>
                  <div v-for="i in totalPages" :key="i">
                      <li :class="getPageClass(i-1)"><button class="page-link" @click="updatePage(i-1)">{{i}}</button></li>
                  </div>
                  <li class="page-item"><button class="page-link" @click="nextPage()">Next</button></li>
                </ul>
              </nav>
          </div>
          <div class="col-5 d-flex justify-content-end">
              <form @submit.prevent>
                  <input @keypress.enter="updateList" v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              </form>
              <button @click="updateList" class="btn btn-primary ">Search</button>
          </div>
        </div>
        <div v-for="car in visibleCars" :key="car.model" class="col-2 d-flex flex-wrap align-content-center justify-content-center">
          <div class="col">
            <div @click="imageClicked(car)" class="btn border-0 " style="text-decoration: none; color: inherit;">
              <img :src="car.imageurl"
                  class="img-fluid shadow-1-strong rounded mb-4 border border-dark">
                <p class="mt-0">{{car.model}}</p>
              </div>
            </div>
          </div>
      </div>  
    </div>
  
    </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    name: 'CarsOfBrandView',
    data(){
      return{
        carsList: [],
        search: "",
        currentPage: 0,
        pageSize: 12,
        visibleCars: [],
        totalPages: 0,
      }
    },
    methods: {
      getPageClass (index) {
            if (index==this.currentPage)
                return "page-item active" 
            else 
                return "page-item"
      },
      updateList() {
            this.carsList = this.getBrandsCars.filter(item => item.model.toLowerCase().includes(this.search.toLowerCase()));
            this.updateVisibleCars();
            this.totalPages = parseInt(this.carsList.length / this.pageSize) +1
            
            
        },
        nextPage() {
          if (this.currentPage == this.totalPages-1)
            this.currentPage = 0
          else if(this.totalPages == 1){
            return}
          else
            this.currentPage = this.currentPage + 1
          this.updateVisibleCars();
        },
        prevPage () {
          if (this.currentPage == 0)
            this.currentPage = this.totalPages-1
          else if(this.totalPages == 1)
            return
          else
            this.currentPage = this.currentPage  -1
          this.updateVisibleCars();
        
        },
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleCars();
            
        },
        updateVisibleCars() {
            this.visibleCars = this.carsList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // if we have 0 visible brands we go back a page
            if (this.visibleCars.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        },
      imageClicked(car){
        this.$router.push(`/cars/${car.idtrim}/`)
      },
      async getCars(){
        await this.fetchBrandsCars(this.$route.params.brand)
        this.carsList = this.getBrandsCars;
        this.updateVisibleCars();
        this.totalPages = parseInt(this.carsList.length / this.pageSize) +1
      },
      ...mapActions(['fetchBrandsCars', 'fetchCarDetail']),
    },
    created(){
      this.getCars()
    },
    components: {
    },
    computed: {
      ...mapGetters(['getFetchedList', 'getBrandsCars']),
  
    },
  }
  </script>
  

  <style>

.container1 {
    height: 75px;
    width: 75px;
    position: relative;
    border: none;
}
.myimg {
  border: none ;
  min-width: 200px;
  max-width: 200px;
  max-height: 200px;
  margin-left: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.grid-container {
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  row-gap: 40px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
  </style>