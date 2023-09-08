import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground,} from 'react-native';
import { DrawerItemList,DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"

const CustomDrawer = props => {
    return (
        <View style={{ flex:1}}>

            <View style={{flex:2 }}>
                <DrawerContentScrollView  {...props}>
                    <ImageBackground source={require("../../assets/img/cyanBackground1.png")} style={{ height: 170, alignItems: "center", justifyContent: "center",flexDirection:"row", }}>
                        <Text style={{ color: "white",fontSize:25}}>TRT</Text>
                        <Text style={{ color: "yellow",fontSize:25}}> WORLD</Text>
                    </ImageBackground>
                </DrawerContentScrollView>
            </View>

            <View style={{ flex: 6.5 }}>

                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>

                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'olive' }}>
                    <TouchableOpacity  style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="share-social-outline" size={22} />
                            <Text
                                style={{
                                    fontSize: 15,

                                    marginLeft: 5,
                                }}>
                                Tell a Friend
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="exit-outline" size={22} />
                            <Text
                                style={{
                                    fontSize: 15,

                                    marginLeft: 5,
                                }}>
                                Sign Out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
};

export default CustomDrawer;
