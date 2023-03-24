import React, {useEffect,useState, useContext} from "react";
import {View, Image, Text,Button, FlatList,StyleSheet,Alert} from 'react-native';
import { cartContext } from "../CartContext";

export function Cart({navigation}){
    let {items,getItemsCount,getTotalPrice} =useContext(cartContext);

    function Totals(){
        let [total,setTotal]=useState(0);
        useEffect(()=>{
            setTotal(getTotalPrice())
        })
		const emptyCart=()=>{
			return Alert.alert(
				"Are you sure",
				"GIB MONEY",
				[
					{
						text:"OKIE",
						onPress:()=>{
							navigation.popToTop();
						}
					},
					{text:"NO >:("}

				]

			)
		}
        return(
			<>
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft,styles.lineTotal]}>Total </Text>
                <Text style={styles.mainTotal}>$ {total}</Text>
		        </View>
				<Button title="BUY" style={styles.buttonStyle} onPress={()=>emptyCart()}></Button>
				</>
        )

    }
    function renderItem({item}){
        return(
            <>
            <View style={styles.cartLine}>
                <Image style={styles.image} source={item.product.image}/>
                <Text style={styles.lineLeft}>{item.product.name} x {item.qty}
                <Text style={styles.productTotal}> $ {item.totalPrice}</Text></Text>
				
            </View>
            </>
        )
    }

    return(
        <FlatList style = {styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item)=>item.product.id.toString()}
        ListFooterComponent={Totals}
        >
        </FlatList>

    )
}
const styles = StyleSheet.create({
	buttonStyle:{
		paddingHorizontal:20
	},
	cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 40,
		color: '#333333'
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'right'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
	}
})
