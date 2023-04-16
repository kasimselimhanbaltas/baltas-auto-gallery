<template>
    <div class="container">
        <div class="row my-5">
            <div class="row d-flex justify-content-between align-items-center">
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
            
            <div class="d-flex flex-wrap align-content-center justify-content-center">
                <div v-for="brand in visibleBrands"
                v-bind:visibleBrands="visibleBrands"
                v-bind:currentPage="currentPage"
                :key="brand.brand" 
                class="inline-block">
                    <a :href="`/brands/${brand.brand}`" style="text-decoration: none; color: inherit;" class="wrapper">
                        <img v-lazy="brand.imageurl"    
                        class="img-fluid">
                    </a>                
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// HTML with examples ***********************
// CSS settings       ***********************
// Bootstrap full course
// Brand list         ***********************
// TopBar upgrade     ***********************
// HomeView upgrade   ***********************
// CarsView Upgrade
// Brands List Responsive

// Spring Boot pagination for carsview?


export default {
    data() {
        return {
            brandsList: [],
            search: "",
            currentPage: 0,
            pageSize: 18,
            visibleBrands: [],
            totalPages: 0,
        };
    },
    created() {
        this.getBrands();
    },
    methods: {
        getPageClass (index) {
            if (index==this.currentPage)
                return "page-item active" 
            else 
                return "page-item"
        },
        async getBrands() {
            await this.fetchBrandList();
            this.brandsList = this.getBrandList;
            this.updateVisibleBrands();
            this.totalPages = this.brandsList.length / this.pageSize
            this.updateList()
        },
        updateList() {
            this.brandsList = this.getBrandList.filter(item => item.brand.toLowerCase().includes(this.search.toLowerCase()));
            this.updateVisibleBrands();
            this.totalPages = parseInt(this.brandsList.length / this.pageSize) +1

            
        },
        nextPage() {
            if (this.currentPage == this.totalPages-1)
                this.currentPage = 0
            else if(this.totalPages == 1){
                return}
            else
                this.currentPage = this.currentPage + 1
            this.updateVisibleBrands();
        },
        prevPage () {
            if (this.currentPage == 0)
                this.currentPage = this.totalPages-1
            else if(this.totalPages == 1)
                return
            else
                this.currentPage = this.currentPage  -1
            this.updateVisibleBrands();
        
        },
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisibleBrands();
            
        },
        updateVisibleBrands() {
            this.visibleBrands = this.brandsList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
            // if we have 0 visible brands we go back a page
            if (this.visibleBrands.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage - 1);
            }
        },
        ...mapActions(["fetchBrandList"])
    },
    computed: {
        ...mapGetters(["getBrandList"]),
    },
}
</script>

<style>
.wrapper {
  display: inline-block;
  height: 150px;
  width: 12vw;
  padding: 5px;
  margin: 5px;
}
.wrapper img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}   
.container1 {
    height: 75px;
    width: 75px;
    position: relative;
    border: none;
}
.myimg {
  border: none ;
  min-width: 150px;
  max-width: 150px;
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
  grid-template-columns: auto auto auto auto auto;
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