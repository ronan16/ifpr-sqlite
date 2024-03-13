import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useCallback, useEffect } from 'react';

import config from './src/database/config'
import { createConnection } from 'typeorm';

import Cadastro from './src/components/Cadastro';

export default function App() {

  const connect = useCallback(async () => {
    try {
      const connection = await createConnection(config);
      //create cars
      await connection.getRepository("Car").save({
        brand: "vw",
        model: "fusca",
      });


    } catch (err) {
      console.log(err)
    }
  })

  useEffect(() => {
    connect()
  }, [])



  return (
    <View style={styles.container}>
      <Cadastro></Cadastro>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
