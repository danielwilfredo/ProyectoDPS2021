import React, {useState, useRef} from 'react';
import { StyleSheet, View, FlatList, Animated} from 'react-native';
import Paginator from './Paginator';
import OnboardingItem from './OnboardingItem';
import slides from '../slides';
let Onboarding
export default Onboarding = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const slidesRef = useRef(null);
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    return(
        <View style={styles.container}>
            <View style={{flex:0.8, alignContent: 'center', alignItems: 'center'}}>

            <FlatList  
                data={slides} 
                renderItem={({item}) => <OnboardingItem item={item} />} 
                horizontal 
                showsHorizontalScrollIndicator={false}
                pagingEnabled 
                bounces={false}
                keyExtractor={(item)=>item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                    useNativeDriver:false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            </View>
            <Paginator data={slides} scrollX={scrollX}/>
            <View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 100,
        height: 120,
        marginRight: 17
    },
    
    
});
