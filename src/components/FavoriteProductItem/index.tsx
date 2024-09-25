import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Product } from '../../models'
import styles from './styles'

type productProps = {
    product: Product
}

function index({ product }: productProps) {
    return (
        <TouchableOpacity style={styles.favorite}>
            <View style={styles.favoriteView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={styles.favoriteImage}
                />
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default index 