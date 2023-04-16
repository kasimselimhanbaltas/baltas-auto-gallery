import axios from "axios";

const API_BASE_URL = 'http://localhost:8085'


class CarGalleryService{
    getCars() {
        return axios.get(API_BASE_URL + '/cars')
    }
    getCar(carid) {
        console.log("fetching car detail for id:", carid)
        return axios.get(API_BASE_URL + '/cars/' + carid)
    }
    getOldCars(model) {
        return axios.get(API_BASE_URL + '/oldcars/' + model)
    }
    getImages(carid) {
        return axios.get(API_BASE_URL + '/images/' + carid )
    }
    getBrands() {
        return axios.get(API_BASE_URL + '/brands')
    }
    getBrandsCars(brand) {
        return axios.get(API_BASE_URL + '/brands/' + brand)
    }
}

export default new CarGalleryService