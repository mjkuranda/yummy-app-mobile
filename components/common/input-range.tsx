import { StyleSheet, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { SliderOnChangeCallback } from '@miblanchard/react-native-slider/lib/types';
import { spanishBlue } from '@/constants/colors';

interface InputRangeProps {
    settings: {
        min: number;
        max: number;
        value: number;
        step: number;
    };
    onChange: SliderOnChangeCallback;
}

export function InputRange({ settings, onChange }: InputRangeProps) {
    const { min, max, step, value } = settings;

    return (
        <View style={styles.container}>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={min}
                onValueChange={onChange}
                thumbTintColor={spanishBlue}
                minimumTrackTintColor={spanishBlue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 120
    }
});