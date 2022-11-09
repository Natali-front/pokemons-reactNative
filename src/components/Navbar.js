import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const Navbar = (props) => {
    return (
        <View style= {styles.navbar}>
            <View>
                <Text style={styles.text}>Pokemon Catalog</Text>
            </View>
            <View style={styles.wrapImg}>
                <Image style={styles.image} source={require('../../assets/pokemon-transparent-background-5-min.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        paddingTop: 30,
        backgroundColor: 'yellow',
        borderWidth: 0.5
    },
    text:{
        fontWeight: '500'
    },
    wrapImg:{
        alignItems: 'center',
        height: 40,
        width: 40,
        marginLeft: 10

    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'

    }

})