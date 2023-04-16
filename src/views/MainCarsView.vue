<template>
    <div class="container-fluid">
        <div class="row">

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
                    <form >
                        <input v-model="search" class="form-control me-2" type="search" placeholder="Search any car model" aria-label="Search">
                    </form>
                    <button @click="updateList" class="btn btn-primary ">Search</button>
                </div>

            </div>

        </div>


    </div>
  <h1>sa</h1>
</template>

<script>
export default {

}
</script>

<style>

</style>