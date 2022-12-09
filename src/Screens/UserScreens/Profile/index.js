import React from 'react'
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const Profile = () => {

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    console.log("AuthState", AuthState);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.profileText}>Profile</Text>
                </View>
                <View>
                    <Image source={AuthState?.avatar} style={styles.image}/>
                </View>
                <View>
                    
                </View>
            </View>
        </>
    );
};

export default Profile;