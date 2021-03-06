import React, { useContext} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Styles from './styles.jsx';
import { walletContext } from '../../../../contexts/Context.js';

const NewBalance = ({navigation}) => {
    const { wallet } = useContext(walletContext)
    return(
        <View style={Styles.container}>
            <View>
                <Text style={Styles.sectionTitle}>Balance Total</Text>
                <TouchableHighlight>
                    <View>
                        <Image />
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={Styles.money}>{wallet.walletValue ? wallet.walletValue.toFixed(2) : 0}
            <Text style={Styles.badgeText}> ARS</Text> 
            </Text>
            <View style={Styles.balanceButtonsContainer}>
                <TouchableHighlight style={Styles.balanceButtons}>
                    <Text style={Styles.textBalanceButtons}>Compraventa</Text>
                </TouchableHighlight>
                <TouchableHighlight style={Styles.balanceButtons}>
                    <Text style={Styles.textBalanceButtons}>Cambiar</Text>
                </TouchableHighlight>
            </View>
            {/* Styles.extraBalanceActions */}
            <View style={Styles.actionsButtonsContainer}>
                <TouchableHighlight>
                    <View style={Styles.actionsButtonsBox}>
                        <View style={Styles.actionsIconsContainer}>
                            <Image 
                                style={Styles.actionsIcons} 
                                source={require('../../../../assets/arrow-down.png')} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Depositar</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={Styles.actionsButtonsBox}>
                        <View style={Styles.actionsIconsContainer}>
                            <Image 
                                style={Styles.actionsIcons} 
                                source={require('../../../../assets/arrow-up.png')} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Enviar</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={Styles.actionsButtonsBox}>
                        <View style={Styles.actionsIconsContainer}>
                            <Image 
                                style={Styles.actionsIcons} 
                                source={require('../../../../assets/Pagar.png')} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Pagar</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('ChargeView')
                }}>
                    <View style={Styles.actionsButtonsBox}>
                        <View style={Styles.actionsIconsContainer}>
                            <Image 
                                style={Styles.actionsIcons} 
                                source={require('../../../../assets/Cobrar.png')} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Cobrar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
};

export default NewBalance;