import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {MovieInformation} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
    movieInformation: MovieInformation;
    cast: Cast[];
}

const MovieDetails = ({movieInformation, cast}: Props) => {
    return (
        <>
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text> {movieInformation.vote_average}</Text>
                    <Text style={{marginLeft: 5}}>
                        {' '}
                        -{' '}
                        {movieInformation.genres
                            .map(genre => genre.name)
                            .join(', ')}
                    </Text>
                </View>
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 16}}>{movieInformation.overview}</Text>
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 18}}>
                    {currencyFormatter.format(movieInformation.budget, {
                        code: 'USD',
                    })}
                </Text>
            </View>

            <View style={{marginTop: 10, marginBottom: 100}}>
                <Text
                    style={{
                        fontSize: 23,
                        marginTop: 10,
                        fontWeight: 'bold',
                        marginHorizontal: 20,
                    }}>
                    Actores
                </Text>
                <FlatList
                    style={{marginTop: 10, height: 70}}
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({});
