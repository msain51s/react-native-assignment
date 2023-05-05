import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from '../utility/Styles';
import ListItem from '../components/ListItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type NavigationListProps = NativeStackScreenProps<
  RootStackParamList,
  'ListScreen'
>;

function ListScreen({navigation}: NavigationListProps) {
  const updatedList = useSelector(
    (state: RootState) => state.listSlice.dataList,
  );
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>

        {!updatedList.length ? (
          <Text style={styles.placeholderTextStyle}> List is empty</Text>
        ) : null}

        <TouchableOpacity
          style={styles.bottomView}
          onPress={() => navigation.navigate('FormScreen')}>
          <Text style={styles.buttonStyle}>Add Business Card</Text>
        </TouchableOpacity>

        <FlatList
          style={{marginBottom: 65}}
          data={updatedList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ItemScreen', {index: index})}>
              <ListItem data={item} />
            </TouchableOpacity>

          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default ListScreen;
