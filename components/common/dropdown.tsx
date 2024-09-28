import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';
import { honeyYellow } from '@/constants/colors';

interface Option {
    en: string;
    label: string;
}

interface DropdownProps {
    label: string;
    options: Option[];
    selectedValue: string;
    onSelectValue: (newValue: string) => void;
}

export function Dropdown({ label, options, selectedValue, onSelectValue }: DropdownProps) {
    return (
        <View style={{ marginVertical: 12 }}>
            <Text style={{ textAlign: 'center', marginBottom: 6 }}>{label}</Text>
            <SelectDropdown
                data={options}
                onSelect={selectedItem => {
                    onSelectValue(selectedItem.en);
                }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {options.find(option => option.en === selectedValue)?.label || 'Każdy'}
                            </Text>
                            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                        </View>
                    );
                }}
                renderItem={item => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...((selectedValue === item.en) && { backgroundColor: '#fca944' }) }}>
                            {/*<Icon name="emoticon-outline" style={styles.dropdownItemIconStyle} />*/}
                            <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: 200,
        height: 40,
        backgroundColor: honeyYellow,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 14,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: honeyYellow,
        borderRadius: 8
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});