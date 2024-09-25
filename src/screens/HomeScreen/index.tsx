import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import productsassets from '../../../assets/products';
import { Product } from '../../models';
import FavoriteProductItem from '../../components/FavoriteProductItem'
const index = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        setProducts(productsassets)
    }, [])


    return (
        <View style={styles.productContainer}>

            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                    Vitrin İlanları
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.detailTitle}>
                        Hepsini gör
                    </Text>
                    <AntDesign name="right" size={18} color="#F24E61" />
                </View>
            </View>

            <ScrollView
                bounces={true}
                horizontal={true}
            >
                {products.map((item) => {
                    return <FavoriteProductItem key={item.id} product={item} />
                })}

            </ScrollView>
        </View>
    )
}

export default index