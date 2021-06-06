import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, Dimensions, ScrollView, RefreshControl, Animated } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Draggable from 'react-native-draggable';
import { AntDesign } from '@expo/vector-icons';
import getBase64Grayscale from "react-native-grayscale";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export function Main() {

    const [image, setImage] = React.useState(null);
    const [mark, setMark] = React.useState(null);
    const [getOpacity, setOpacity] = React.useState(1)
    const [getOpenOpacity, setOpenOpacity] = React.useState(false)
    const [getGrayFilter, setGrayFilter] = React.useState("grayscale(0%)")
    const [getGrayFilterNum, setGrayFilterNum] = React.useState(0)
    const [refreshing, setRefreshing] = React.useState(false);
    const [getImageWidth, setImageWidth] = React.useState(100);
    const [getImaheHeight, setImageHeight] = React.useState(100);
    const [getImageX, setImageX] = React.useState(50);
    const [getImageY, setImageY] = React.useState(10);
    const [getBlur, setBlur] = React.useState(0)
    const [checkSpatialDomain, setCheckSpatialDomatin] = React.useState(false)
    const [getTime,setTime] = React.useState(false);

    const [getFilterName, setFilterName] = React.useState();

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
                        <View>

                            <Image
                                blurRadius={getBlur}
                                style={{
                                    width: 350,
                                    height: 500,
                                    alignSelf: "center",
                                    resizeMode: 'cover',
                                    position: 'absolute',
                                }}
                                source={{ uri: image }}
                            />

                            <View
                                style={{
                                    width: 350,
                                    height: 500,
                                    alignSelf: "center",
                                    resizeMode: 'cover',
                                    position: 'absolute',
                                    backgroundColor: 'gray',
                                    opacity: getGrayFilterNum
                                }}>
                            </View>


                        </View>
                    }

                    {mark &&
                        <View style={{ width: '80%', height: 500, alignItems: 'center' }}>
                            {Platform.OS !== "android" ?
                                <Draggable
                                    renderSize={80}
                                    x={getImageX}
                                    y={getImageY}
                                    minX={50}
                                    maxX={Dimensions.get('screen').width - 130}
                                    minY={10}
                                    maxY={Dimensions.get('screen').width - 50}
                                    onLongPress={() => console.log('long press')}
                                    onShortPressRelease={() => console.log('press drag')}
                                    onPressIn={() => console.log('in press')}
                                    onPressOut={() => console.log('out press')}
                                >
                                    <View>
                                        <Image
                                            source={{ uri: mark }}
                                            blurRadius={getBlur}
                                            style={{
                                                position: 'absolute',
                                                width: getImageWidth,
                                                height: getImaheHeight,
                                                alignSelf: "center",
                                                resizeMode: 'contain',
                                                position: 'absolute',
                                                opacity: getOpacity,
                                            }} />
                                        <View
                                            style={{
                                                width: 100,
                                                height: 100,
                                                alignSelf: "center",
                                                resizeMode: 'contain',
                                                position: 'absolute',
                                                backgroundColor: 'gray',
                                                opacity: getGrayFilterNum
                                            }}>
                                        </View>
                                    </View>

                                </Draggable>
                                :
                                <View>
                                    <Image
                                        source={{ uri: mark }}
                                        x={getImageX}
                                        y={getImageY}
                                        blurRadius={getBlur}
                                        minX={50}
                                        maxX={Dimensions.get('screen').width - 130}
                                        minY={10}
                                        maxY={Dimensions.get('screen').width - 50}
                                        style={{
                                            position: 'absolute',
                                            width: getImageWidth,
                                            height: getImaheHeight,
                                            alignSelf: "center",
                                            resizeMode: 'contain',
                                            position: 'absolute',
                                            opacity: getOpacity,

                                        }} />

                                    <View
                                        style={{
                                            width: 100,
                                            height: 100,
                                            alignSelf: "center",
                                            resizeMode: 'contain',
                                            position: 'absolute',
                                            backgroundColor: 'gray',
                                            opacity: getGrayFilterNum
                                        }}>
                                    </View>
                                </View>
                            }





                        </View>
                    }
                </View>
            </ScrollView>





            {getOpenOpacity ?
                <View
                    style={styles.WaterMarkerSubTeknikContainer}>
                    {getFilterName === "Visible-Invisible" &&
                        <>
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
                        </>

                        || getFilterName === "Frekans" &&
                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    if (getGrayFilterNum !== 1) {
                                        setGrayFilterNum((((getGrayFilterNum * 10) + (0.1 * 10)) / 10))
                                    }
                                    else {
                                        alert("Graysclale daha fazla artamaz")
                                    }
                                }}>
                                <AntDesign name="pluscircle" size={24} color="#C8C8A9" />
                            </TouchableOpacity>
                            <Text style={styles.OpacityText}>{getGrayFilterNum}</Text>
                            <TouchableOpacity onPress={() => {
                                if (getGrayFilterNum !== 0) {
                                    setGrayFilterNum(((getGrayFilterNum * 10) - (0.1 * 10)) / 10)
                                }
                                else {
                                    alert("Graysclale daha fazla azalamz")
                                }
                            }}>
                                <AntDesign name="minuscircle" size={24} color="#C8C8A9" />
                            </TouchableOpacity>
                        </>
                        || getFilterName === "BitStream" &&

                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    if (getBlur !== 5) {
                                        setBlur(getBlur + 1)
                                    }
                                    else {
                                        alert("Blur daha fazla artamaz")
                                    }
                                }}>
                                <AntDesign name="pluscircle" size={24} color="#C8C8A9" />
                            </TouchableOpacity>
                            <Text style={styles.OpacityText}>{getBlur}</Text>
                            <TouchableOpacity onPress={() => {
                                if (getBlur !== 0) {
                                    setBlur(getBlur - 1)
                                }
                                else {
                                    alert("Blur daha fazla azalamz")
                                }
                            }}>
                                <AntDesign name="minuscircle" size={24} color="#C8C8A9" />
                            </TouchableOpacity>
                        </>
                    }

                </View>
                :
                null}




            <ScrollView
                style={styles.WatermarkerTeknikContainer}
                horizontal>
                <TouchableOpacity
                    style={styles.WaterMarkerTeknikItems}
                    onPress={() => {
                        setFilterName("Visible-Invisible")
                        setOpenOpacity(!getOpenOpacity)
                    }}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Visible/Invisible Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setFilterName("Frekans")
                        setOpenOpacity(!getOpenOpacity)
                    }}
                    style={styles.WaterMarkerTeknikItems}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Frekans Domain Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (checkSpatialDomain === false) {
                            setImageHeight(300);
                            setImageWidth(500);
                            setOpacity(0.1)
                            setCheckSpatialDomatin(!checkSpatialDomain)
                        }
                        else {
                            setImageHeight(100);
                            setImageWidth(100);
                            setOpacity(1)
                            setCheckSpatialDomatin(!checkSpatialDomain)
                        }

                    }}
                    style={styles.WaterMarkerTeknikItems}>
                    <Text style={styles.WaterMarkerTeknikItemsText}>Spatial Domain Watermarking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setFilterName("BitStream")
                        setOpenOpacity(!getOpenOpacity)
                    }}
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
        width: 383,
        height:60,
        borderWidth: 1,
        padding: 15,
        borderColor: "#f0ae7e",
    },
    WaterMarkerTeknikItemsText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        textAlign: 'center',
        alignSelf: 'center'
    },
    WaterMarkerSubTeknikContainer: {
        width: '100%',
        height: 50,
        marginBottom: 90,
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