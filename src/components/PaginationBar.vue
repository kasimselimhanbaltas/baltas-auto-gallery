<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><button class="page-link" @click="mylog(as)">Previous</button></li>
    <div v-for="i in (10)" :key="i">
        <li class="page-item"><button class="page-link" @click="mylog(i)">{{i}}</button></li>
    </div>
    <li class="page-item"><button class="page-link" @click="mylog(next)">Next</button></li>
  </ul>
</nav>
</template>

<script>
export default {
    methods: {
        mylog(msg) {
        }
    }

}
</script>

<style>

</style>