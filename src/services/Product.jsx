import React, { Component, useState } from 'react'
import { useEffect } from 'react'
import { API_URI } from '../const/APIConfig'

export default class Product {
    constructor() {
    }
    getproducts(endGetData) {
        const [data, setData] = useState()
        useEffect(() => {
            fetch(API_URI)
                .then(response => {
                    if (response.status === 200)
                        return response.json()
                    else
                        return []
                })
                .then((response) => {
                    endGetData(response)
                })
        }, [])
    };
}