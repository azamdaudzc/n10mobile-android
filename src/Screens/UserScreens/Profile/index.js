import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { back, eye, logout, pensil, profile } from '../../../Constants/Images';
import { LogOut } from '../../../Store/Reducer/AuthReducer';
import styles from './styles';

const Profile = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const AuthState = useSelector(state => {
        return state?.AuthReducer?.UserDetail;
    });

    const logoutFunc = () => {
        dispatch(LogOut([]));
    };

    const EditProfile = () => {
        navigation.navigate("EditProfileScreen");
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={back} style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.profileText}>Profile</Text>
                </View>
                <View style={styles.names}>
                    <View style={styles.imageView}>
                        {/* <Image source={AuthState?.avatar} style={styles.image} />*/}
                        <Image source={profile} style={styles.image} />
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.field}>Full Name</Text>
                        <Text style={styles.clientFields}>{AuthState?.first_name} {AuthState?.last_name}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.field}>Email</Text>
                        <Text style={styles.clientFields}>{AuthState?.email}</Text>
                    </View>
                    {/* <View style={styles.detail}>
                        <Text style={styles.field}>Phone Number</Text>
                        <Text style={styles.clientFields}>{AuthState?.phone}</Text>
                    </View> */}
                    <View style={styles.ageView}>
                        <View>
                            <Text style={styles.field}>Age</Text>
                            <Text style={styles.clientFields}>{AuthState?.age}</Text>
                        </View>
                        <View>
                            <Text style={styles.field}>Height</Text>
                            <Text style={styles.clientFields}>{AuthState?.height}</Text>
                        </View>
                        <View>
                            <Text style={styles.field}>Gender</Text>
                            <Text style={styles.clientFields}>{AuthState?.gender}</Text>
                        </View>
                        <View>
                            <Text style={styles.field}>Athletic Type</Text>
                            <Text style={styles.clientFields}>{AuthState?.athletic_type}</Text>
                        </View>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.field}>Password</Text>
                        <View style={styles.passView}>
                            <Text style={styles.clientFields}>**********</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.pensilView} onPress={EditProfile}>
                <Image source={pensil} style={styles.pensil} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutBtn} onPress={logoutFunc}>
                <Text style={styles.logoutText}>Logout</Text>
                <Image source={logout} style={styles.logout} />
            </TouchableOpacity>
        </>
    );
};

export default Profile;