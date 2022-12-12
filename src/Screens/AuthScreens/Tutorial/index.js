import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Time from '../../../Components/Time';
import Track from '../../../Components/Track';
import Trainer from '../../../Components/Trainer';
import Workout from '../../../Components/Workout';
import COLORS from '../../../Constants/COLORS';
import styles from './styles';

const Tutorial = () => {

    return (
        <>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                dot={
                    <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: "10%"
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: COLORS.mehron,
                            width: 20,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: "10%"
                        }}
                    />
                }
            >
                <View style={styles.slide1}>
                    <Time />
                </View>
                <View style={styles.slide1}>
                    <Workout />
                </View>
                <View style={styles.slide1}>
                    <Track />
                </View>
                <View style={styles.slide1}>
                    <Trainer />
                </View>
            </Swiper>
        </>
    );
};

export default Tutorial;