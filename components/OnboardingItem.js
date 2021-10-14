import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';

let OnboardingItem
export default OnboardingItem= ({item}) => {
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container,{width}]}>
          <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
          <View style={{flex:0.01}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex: 0.6,
        justifyContent: 'center',
    },
    title:{
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 4,
        color: '#fff',
        textAlign: 'center',
    },
    description:{
        fontWeight: '300',
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});
