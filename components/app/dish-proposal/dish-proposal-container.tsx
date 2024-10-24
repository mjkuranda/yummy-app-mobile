import { useGetDishProposals } from '@/api/endpoints';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Loader } from '@/components/common/loader';
import { honeyYellow, orangeYellowCrayola } from '@/constants/colors';
import { constantStyles } from '@/constants/styles';
import { DishImage } from '@/components/app/result/dish-image';
import { Button } from '@/components/common/button';
import Icon from 'react-native-vector-icons/AntDesign';

export function DishProposalContainer() {
    const { isLoading, getCurrentProposal, onPrevious, onNext, onChoose } = useGetDishProposals();
    const currentProposal = getCurrentProposal();

    if (!isLoading && !currentProposal) {
        return (
            <View style={styles.proposalContainerWithNoProposals}>
                <Text style={styles.noDishes}>Brak propozycji dań dla Ciebie.</Text>
            </View>
        );
    }

    return (
        <View style={styles.proposalContainer}>
            {isLoading
                ? <View style={{ ...constantStyles.flexCenter }}><Loader /></View>
                : (
                    <View>
                        <DishImage provider={currentProposal!.provider} imgUrl={currentProposal!.imgUrl} />
                        <Text style={styles.proposalTitle}>{currentProposal!.title}</Text>
                        <View style={styles.navigationContainer}>
                            <Button label="Poprzednia" icon={<Icon name="caretleft" color="white" />} iconLeft={true} onClick={onPrevious} width={150} />
                            <Button label="Następna"  icon={<Icon name="caretright" color="white" />} onClick={onNext} width={150} />
                        </View>
                        <View style={styles.chooseContainer}>
                            <Button label="Wybierz" onClick={onChoose} width={330} />
                        </View>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    proposalContainer: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height - 335,
        backgroundColor: orangeYellowCrayola
    },
    proposalContainerWithNoProposals: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height - 335,
        backgroundColor: honeyYellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
    proposalTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    navigationContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 12
    },
    chooseContainer: {
        marginTop: -20,
        marginLeft: 12
    },
    noDishes: {
        fontWeight: 'bold',
        fontSize: 18
    }
});