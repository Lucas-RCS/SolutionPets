import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import style from './DashboardCss.js';
import { Div } from '../../elements/common.js';
import { Image } from 'react-native';

export function Dashboard() {
    return (
        <View>
            <View style={style.container}>
                <Div style={style.header}>
                    <ImageBackground source={require('../../../assets/img/background2.png')}
                        style={{ width: '100%', height: '100%', }}>
                        <Div style={style.containerDash}>
                            <Text style={style.welcome}>Bem vindo(a)</Text>
                            <Div style={style.logo}>
                                <Text style={style.titleDash}>
                                    Solution Pets
                                </Text>
                                <Image source={require('../../../assets/img/logo.png')} style={style.imgLogo} />
                            </Div>
                        </Div>
                    </ImageBackground>
                </Div>
                <Div style={style.content}>
                    
                </Div>
            </View>
        </View>
    );
}
