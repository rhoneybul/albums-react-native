import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const Album = ({ album }) => {
    
    const { url, thumbnail_image, title, artist, image } = album ;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </ CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: image }}></Image>
            </CardSection>
            <CardSection>
                <Button text={`Buy ${title} on Amazon`} onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    thumbnailStyle: {
        height: 50, 
        width: 50,
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}

export default Album;