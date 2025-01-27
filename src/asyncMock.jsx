
const products = [
    {
        id: 1,
        name: "asd1",
        price:5000 ,
        category: "celular",
        img: "asd1",
        stock: 30,
        description: ""
    },
    {
        id: 2,
        name: "asd2",
        price: 10000,
        category: "celular",
        img: "asd2",
        stock: 20,
        description: ""
    },
    {
        id: 3,
        name: "asd3",
        price: 30000,
        category: "tablet",
        img: "asd3",
        stock: 12,
        description: ""
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

