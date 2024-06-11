import {StyleSheet, Image, Platform, View, Text} from 'react-native';
import {Button, Divider, useTheme} from "react-native-paper";
import {useRouter} from "expo-router";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks"
import { facebookLogin, selectToken } from "@/app/redux/authSlice";

export default function AuthScreen() {
    const theme = useTheme();
    const router = useRouter();

    const dispatch = useAppDispatch();
    const fbIDtoken = useAppSelector(selectToken);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            alignItems: 'center',
            // marginTop: 20
            // marginBottom: 100
        },
        image: {
            // marginBottom: 280,
            resizeMode: 'contain',
            height: 300,
            width: 300
        },
        divider: {
            width: '60%',
            color: theme.colors.secondary,
            marginTop: 10,
            marginBottom: 10
        },
        text: {
            color: theme.colors.secondary,
        }
    });

  return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Divider style={styles.divider}/>
        <Button
            icon="facebook"
            mode="contained-tonal"
            style={styles.button}
            onPress={ () => dispatch(facebookLogin()) }
        >
          FB Auth test
        </Button>
        <Divider style={styles.divider}/>
        <Text>Facebook ID Token is: </Text>
        <Text>{ fbIDtoken }</Text>
      </View>
  );
}
