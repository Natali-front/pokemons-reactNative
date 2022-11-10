import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons";


export const PokemonCard = ({ goBack, pokemonInfo, pokemon }) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.btnWrap}>
                <AntDesign.Button onPress={goBack} style={styles.btn} name='back'>Back</AntDesign.Button>
                {/* <Button    /> */}
            </View>
            <View style={styles.cardWrap}>
                <View style={styles.imgWrap}>
                    <Image source={{ uri: pokemonInfo.pokeimage }} style={{ width: 160, height: 160 }} />
                </View>
                <View style={styles.infoWrap}>
                    <View style={styles.wrapLine}>
                        <View><Text style={styles.info}>Pokemon's name:</Text></View>
                        <View><Text style={styles.data}>{pokemonInfo.name}</Text></View>
                    </View>
                    <View style={styles.wrapLine}>
                        <View><Text style={styles.info}>Pokemon's type:</Text></View>
                        <View><Text style={styles.data}>{pokemonInfo.type}</Text></View>
                    </View>
                    <View style={styles.wrapLine}>
                        <View><Text style={styles.info}>Pokemon's weight:</Text></View>
                        <View><Text style={styles.data}>{pokemonInfo.weight}</Text></View>
                    </View>
                    <View style={styles.wrapLine}>
                        <View><Text style={styles.info}>Pokemon's height:</Text></View>
                        <View><Text style={styles.data}>{pokemonInfo.height}</Text></View>
                    </View>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        justifyContent: 'center',
        marginLeft: 20
    },
    cardWrap: {
        width: '90%',
        marginTop: 10
    },
    imgWrap: {
        alignItems: 'center'
    },
    infoWrap: {
        justifyContent:'space-between',
        width: '100%'
    },
    btnWrap: {
        width: '25%',
        justifyContent: 'center',
        marginTop: 20,
        margin: 'auto'
    },
    btn: {
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: '#5c5757'
        
    },
    info: { 
        fontSize: 16, 
        textTransform: 'capitalize',
        marginBottom: 15
    },
    data: {
        fontSize: 18, 
        textTransform: 'capitalize',
        marginBottom: 15
    },
    wrapLine:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})