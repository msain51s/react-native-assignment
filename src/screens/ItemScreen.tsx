import React, {useEffect} from 'react';
import ListItem, {ListItemProps} from '../components/ListItem';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../utility/Styles';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {Item} from '../redux/reducers/reducer';
import {RootState} from '../redux/store';
import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';
import {useDispatch} from 'react-redux';
import {removeItemFromList} from '../redux/action-creator';

type NavigationItemProps = NativeStackScreenProps<
  RootStackParamList,
  'ItemScreen'
>;

export default function ItemScreen({route, navigation}: NavigationItemProps) {
  const list = useSelector((state: RootState) => state.listSlice.dataList);
  const item: Item = list[route.params.index];

  const dispatch = useDispatch();

  const requestPermission = PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    },
  );

  useEffect(() => {
    requestPermission;
  });

  return (
    <View>
      <ListItem data={item} />

      <TouchableOpacity
        onPress={() => {
          dispatch(removeItemFromList(route.params.index, list));
          navigation.pop();
        }}>
        <Text style={styles.buttonStyle}>Delete Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          openContactForm(item);
        }}>
        <Text style={styles.buttonStyle}>Export as Phone Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

function openContactForm(props: ListItemProps) {
  var newPerson = {
    emailAddresses: [
      {
        label: 'work',
        email: props.emailAddress,
      },
    ],
    displayName: props.name,
  };

  Contacts.openContactForm(newPerson).then(contact => {
    console.warn('Contact saved');
  });
}
