import React, { useState, useRef } from 'react';
import { ScrollView, Animated, Image, Text, TouchableOpacity, Easing,  } from 'react-native';
import style from './WikiCss.js';
import { DivCard, DivCommon, DivContent, DivImage } from '../../elements/common.js';
import { useFocusEffect } from '@react-navigation/native';
import { Cat, Dog, Horse } from 'phosphor-react-native';
import { CardCats } from '../../component/CardCats/Cats.js';
import { CardDogs } from '../../component/CardDogs/Dogs.js';
import { CardHorse } from '../../component/CardHorse/Horse.js';

export function Wiki() {
    const translateYAnim = new Animated.Value(10);

    // Estados e animações separadas para cada card
    const [isDivContent1Visible, setDivContent1Visible] = useState(false);
    const divContentHeight1 = useRef(new Animated.Value(0)).current;

    const [isDivContent2Visible, setDivContent2Visible] = useState(false);
    const divContentHeight2 = useRef(new Animated.Value(0)).current;

    const [isDivContent3Visible, setDivContent3Visible] = useState(false);
    const divContentHeight3 = useRef(new Animated.Value(0)).current;

    useFocusEffect(() => {
        Animated.timing(translateYAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
        }).start();

        return () => {
            translateYAnim.setValue(10);
        };
    });

    const toggleDivContent = (cardNumber) => {
        if (cardNumber === 1) {
            setDivContent1Visible(!isDivContent1Visible);
            Animated.timing(divContentHeight1, {
                toValue: isDivContent1Visible ? 0 : 350,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        } else if (cardNumber === 2) {
            setDivContent2Visible(!isDivContent2Visible);
            Animated.timing(divContentHeight2, {
                toValue: isDivContent2Visible ? 0 : 350,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        } else if (cardNumber === 3) {
            setDivContent3Visible(!isDivContent3Visible);
            Animated.timing(divContentHeight3, {
                toValue: isDivContent3Visible ? 0 : 350,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <ScrollView style={style.container}>
            <Animated.View
                style={[
                    style.animatedContainer,
                    {
                        transform: [{ translateY: translateYAnim }],
                    },
                ]}
            >
                <TouchableOpacity onPress={() => toggleDivContent(1)}>
                    <DivCard>
                        <DivImage>
                            <Image source={require('../../../assets/img/cat.jpg')} style={style.image} />
                        </DivImage>
                        <DivCommon>
                            <Text style={style.text}>Gatos</Text>
                            <Cat color='#48ff9a' weight='duotone' style={style.icons} />
                        </DivCommon>
                        <Animated.View style={{ height: divContentHeight1 }}>
                            {isDivContent1Visible && (
                                <DivContent>
                                    <CardCats/>
                                </DivContent>
                            )}
                        </Animated.View>
                    </DivCard>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDivContent(2)}>
                    <DivCard>
                        <DivImage>
                            <Image source={require('../../../assets/img/dog.jpg')} style={style.image} />
                        </DivImage>
                        <DivCommon>
                            <Text style={style.text}>Cães</Text>
                            <Dog color='#48ff9a' weight='duotone' style={style.icons} />
                        </DivCommon>
                        <Animated.View style={{ height: divContentHeight2 }}>
                            {isDivContent2Visible && (
                                <DivContent>
                                    <CardDogs/>
                                </DivContent>
                            )}
                        </Animated.View>
                    </DivCard>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleDivContent(3)}>
                    <DivCard>
                        <DivImage>
                            <Image source={require('../../../assets/img/horse.jpg')} style={style.image} />
                        </DivImage>
                        <DivCommon>
                            <Text style={style.text}>Cavalos</Text>
                            <Horse color='#48ff9a' weight='duotone' style={style.icons} />
                        </DivCommon>
                        <Animated.View style={{ height: divContentHeight3 }}>
                            {isDivContent3Visible && (
                                <DivContent>
                                    <CardHorse/>
                                </DivContent>
                            )}
                        </Animated.View>
                    </DivCard>
                </TouchableOpacity>
            </Animated.View>
        </ScrollView>
    );
}
