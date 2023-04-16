import CarGalleryService from '@/services/CarGalleryService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    carList: null,
    carDetail: {
      idtrim: ''
    },
    carImage: null,
    carImages: null,
    brandList: null,
    brandsCars: null,
    oldCarList: null,
  },
  getters: {
    getFetchedList(state){
      return state.carList;
    },
    getCarDetail(state){
      return state.carDetail;
    },
    getCarImage(state) {
      return state.carImage
    },
    getCarImages(state){
      return state.carImages
    },
    getBrandList(state) {
      return state.brandList
    },
    getBrandsCars(state){
      return state.brandsCars
    },
    getOldCarList(state) {
      return state.oldCarList
    },


  },
  mutations: {
    setCarList(state, carList){
      state.carList = carList
    },
    setCarDetail(state, carDetail){
      for (var key in carDetail) {
        if (carDetail[key] == "") {
          delete carDetail[key];
        }
        delete carDetail['imageurl']
      }
      state.carDetail = carDetail
    },
    setCarImage(state, carImage){
      state.carImage = carImage
    },
    setCarImages(state, carImages){
      state.carImages = carImages
    },
    setBrandList(state, brandList){
      state.brandList = brandList
    },
    setBrandsCars(state, brandsCars){
      state.brandsCars = brandsCars
    },
    setOldCarList(state, oldCarList) {
      state.oldCarList = oldCarList
    },

  },
  actions: {
    async fetchCarList(context){
      await CarGalleryService.getCars().
      then(response => {
        context.commit('setCarList', response.data)
      })
    },
    async fetchCarDetail(context, payload){
      await CarGalleryService.getCar(payload[0]).
      then(response => {
        context.commit('setCarDetail', response.data)
      })
    },
    async fetchCarImages(context, payload){
      await CarGalleryService.getImages(payload[0]).
      then(response => {
        context.commit('setCarImages', response.data)
      })
    },
    async fetchBrandList(context, brand){
      await CarGalleryService.getBrands(brand).
      then(response => {
        context.commit('setBrandList', response.data)
      })
    },
    async fetchBrandsCars(context, brand){
      await CarGalleryService.getBrandsCars(brand).
      then(response => {
        context.commit('setBrandsCars', response.data)
      })
    },
    async fetchOldCars(context, model){
      await CarGalleryService.getOldCars(model).
      then(response => {
        context.commit('setOldCarList', response.data)
      })
    },

  },
  modules: {
  }
})
