import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, Dimensions, ScrollView, RefreshControl , Animated} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Draggable from 'react-native-draggable';
import { AntDesign } from '@expo/vector-icons';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Main() {

    const [image, setImage] = React.useState(null);
    const [mark, setMark] = React.useState(null);
    const [getOpacity, setOpacity] = React.useState(1)
    const [getOpenOpacity, setOpenOpacity] = React.useState(false)

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const pickImageForMark = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setMark(result.uri);
        }
    };

    return (
        <View style={styles.Container}>

            {image ?
                <TouchableOpacity
                    style={styles.PickImageButtonContainer}
                    onPress={() => { setImage(null); }} >
                    <Text style={styles.PickImageButtonText}>Delete Image</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.PickImageButtonContainer}
                    onPress={() => { pickImage(); }} >
                    <Text style={styles.PickImageButtonText}>Choose Image</Text>
                </TouchableOpacity>
            }

            {mark ?
                <TouchableOpacity
                    style={styles.PickImageButtonContainer}
                    onPress={() => { setMark(null); }} >
                    <Text style={styles.PickImageButtonText}>Delete Mark</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.PickImageButtonContainer}
                    onPress={() => { pickImageForMark(); }} >
                    <Text style={styles.PickImageButtonText}>Choose Mark</Text>
                </TouchableOpacity>
            }

            <ScrollView
                style={{ marginTop: 20, marginBottom: 20, }}>
                <View style={{
                    width: '100%',
                    height: 400,
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>


                    {image &&
                        <>
                            <Image
                                source={{ uri: image }}
                                style={{
                                    width: 350,
                                    height: 500,
                                    alignSelf: "center",
                                    resizeMode: 'cover',
                                    position: 'absolute'

                                }} />

                        </>
                    }

                    {mark &&
                        <View style={{ width: '80%', height: 500, alignItems: 'center' }}>
                            {Platform.OS !== "android" ?
                                <Draggable
                                    renderSize={80}
                                    x={50}
                                    y={10}
                                    minX={50}
                                    maxX={Dimensions.get('screen').width - 130}
                                    minY={10}
                                    maxY={Dimensions.get('screen').width - 50}
                                    onLongPress={() => console.log('long press')}
                                    onShortPressRelease={() => console.log('press drag')}
                                    onPressIn={() => console.log('in press')}
                                    onPressOut={() => console.log('out press')}
                                >
                                    <Image
                                        source={{ uri: mark }}
                                        style={{
                                            position: 'absolute',
                                            width: 100,
                                            height: 100,
                                            alignSelf: "center",
                                            resizeMode: 'contain',
                                            position: 'absolute',
                                            opacity: getOpacity
                                        }} />

                                </Draggable>
                                :
                                <Image
                                    source={{ uri: mark }}
                                    x={50}
                                    y={10}
                                    minX={50}
                                    maxX={Dimensions.get('screen').width - 130}
                                    minY={10}
                                    maxY={Dimensions.get('screen').width - 50}
                                    style={{
                                        position: 'absolute',
                                        width: 100,
                                        height: 100,
                                        alignSelf: "center",
                                        resizeMode: 'contain',
                                        position: 'absolute',
                                        opacity: getOpacity,
                                        
                                    }} />
                            }





                        </View>
                    }
                </View>
            </ScrollView>





            {getOpenOpacity ?
                <View
                    style={styles.WaterMarkerSubTeknikContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            if (getOpacity !== 1) {
                                setOpacity((((getOpacity * 10) + (0.1 * 10)) / 10))
                            }
                            else {
                                alert("Opacity daha fazla artamaz")
                            }
                        }}>
                        <AntDesign name="pluscircle" size={24} color="#C8C8A9" />
                    </TouchableOpacity>
                    <Text style={styles.OpacityText}>{getOpacity}</Text>
                    <TouchableOpacity onPress={() => {
                        if (getOpacity !== 0) {
                            setOpacity(((getOpacity * 10) - (0.1 * 10)) / 10)
                        }
                        else {
                            alert("Opacity daha fazla azalamz")
                        }
                    }}>
                        <AntDesign name="minuscircle" size={24} color="#C8C8A9" />
                    </TouchableOpacity>
                </View>
                :
                null}




            <ScrollView
                style={styles.WatermarkerTeknikContainer}
                horizontal>
                <TouchableOpacity
                    style={styles.WaterMarkerTeknikItems}
                    onPress={() => {
                        setOpenOpacity(!getOpenOpacity)
                    }}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Visible/Invisible Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.WaterMarkerTeknikItems}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Frekans Domain Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.WaterMarkerTeknikItems}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Spatial Domain Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.WaterMarkerTeknikItems}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>BitStream Domain Watermarking</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>


    )
}


const styles = StyleSheet.create({
    Container: {
        width: '100%',
        backgroundColor: '#fff',
        height: '100%'
    },
    PickImageButtonContainer: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#83AF9B',
        width: '80%',
        borderRadius: 8,
        elevation: 8,
        alignSelf: 'center'
    },
    PickImageButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    WatermarkerTeknikContainer: {
        backgroundColor: "#F9CDAD",
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    WaterMarkerTeknikItems: {
        width: 150,
        borderWidth: 1,
        padding: 15,
        borderColor: "#f0ae7e",
    },
    WaterMarkerTeknikItemsText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        textAlign:'center',
        alignSelf:'center'
    },
    WaterMarkerSubTeknikContainer: {
        width: '100%',
        height: 50,
        marginBottom: 65,
        borderTopWidth: 1,
        borderColor: "#f0ae7e",
        flexDirection: "row",
        alignItems: 'center',
        zIndex: 1,
        justifyContent: 'space-evenly',
    },
    OpacityText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})