const PRODUCTS = [
    {
        id: 1,
        name: "butterfly pro",
        price: 100,
        image: require("../assets/bestButterfly.jpeg"),
        description: "Best butterfly in the wolrd i have seen them all"
    },
    {
        id: 2,
        name: "butterfly blu",
        price: 10,
        image: require("../assets/blubutterfly.jpg"),
        description: "Best butterfly in the wolrd i have seen them all"
    }, {
        id: 3,
        name: "butterfly rose",
        price: 999,
        image: require("../assets/rose.jpg"),
        description: "Best butterfly in the wolrd i have seen them all"
    },]

    export function getProducts(){
        return PRODUCTS;
    }

    //geting product by id
    export function getProduct(id){
        return PRODUCTS.find((product)=>product.id ==id);
    }