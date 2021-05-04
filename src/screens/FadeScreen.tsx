import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const {opacity, fadeIn, fadeOut} = useFade();

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity: opacity,
                    
                }}
            />
            <Button title="FadeIn" onPress={() => fadeIn()} />
            <Button title="FadeOut" onPress={() => fadeOut()} />
        </View>
    );
};

export default FadeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#084F6A',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10
    },
});
