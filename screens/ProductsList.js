import React,{useEffect, useState} from "react";
import {View, Text, FlatList,StyleSheet} from "react-native";
import { getProducts } from "../services/ProductService";

export function ProductsList(){

    function renderProduct({item: product}){
        return(
            <Product></Product>
        )
    }

    const[product,setProduct] =useState([]);

    useEffect(()=>{
        setProduct(getProducts())

    })

    return(
        <FlatList style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}>
            keyExtractor={(item)=> item.id.toString()}
            data={product}
            renderItem={renderProduct}

        </FlatList>

    )
}


const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });