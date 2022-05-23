
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'
import axios from 'axios'

const STORAGE_KEY = 'toy'
const BASE_URL = 'http://localhost:3030/api/toy'
const toyChannel = new BroadcastChannel('toyChannel')


export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy
}

function query() {
    return httpService.get('toy')
}

function getById(toyId) {

    return httpService.get(`toy/${toyId}`)
}

function remove(toyId) {
    return httpService.delete(`toy/${toyId}`)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(`toy/:${toy._id}`, toy)
    }
    else {
        return httpService.post(`toy`, toy)
    }
}

function getEmptyToy() {
    return {
        "name": "",
        "price": 0,
        "labels": [],
        "createdAt": Date.now(),
        "inStock": true
    }
}


