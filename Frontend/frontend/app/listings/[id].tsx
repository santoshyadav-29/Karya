import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

const Id = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>
                {
                    id
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Id;
