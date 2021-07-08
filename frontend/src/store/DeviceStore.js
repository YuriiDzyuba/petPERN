import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name:"fridges"},
            {id:2, name:"phones"},
            {id:3, name:"cars"},
            {id:4, name:"tables"},
            {id:5, name:"laptops"},
            {id:6, name:"monitors"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "LG"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
            {id: 5, name: "Sharp"},


        ]
        this._devices = [
            {id: 1, name: "PHONE2", price: 32343, rating: 4, img: "https://i.shgcdn.com/60947bdd-05af-4c45-955d-2428073898fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
            {id: 2, name: "PHONE333", price: 3343, rating: 4, img: "https://i.shgcdn.com/60947bdd-05af-4c45-955d-2428073898fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
            {id: 3, name: "PHONE-25", price: 1343, rating: 4, img: "https://i.shgcdn.com/60947bdd-05af-4c45-955d-2428073898fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
            {id: 4, name: "PHONE12", price: 243, rating: 4, img: "https://i.shgcdn.com/60947bdd-05af-4c45-955d-2428073898fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},
        ]

        this._selectedType={}

        this._selectedBrand={}

        makeAutoObservable(this)
    }

    setSelectedType(type) {
        this._selectedType=type
    }

    setSelectedBrand(brand) {
        this._selectedBrand=brand
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}