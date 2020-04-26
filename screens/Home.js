import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card, Button, Icon, Image} from 'react-native-elements';

const URL = 'http://localhost:3000/api/v1';

const Home = () => {
  const [qRCodes, setQRCodes] = useState([]);

  const getQRCodes = useCallback(async () => {
    const response = await fetch(URL);
    const qrs = await response.json();

    if (response.ok) {
      console.log(qrs.data);
      setQRCodes(qrs.data);
    }
  }, []);

  useEffect(() => {
    getQRCodes();
  }, []);

  return (
    <FlatList
      data={qRCodes}
      renderItem={({item}) => (
        <Card title="HELLO WORLD!">
          <Image source={{uri: item.codeUrl}} style={styles.image} />
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={styles.button}
            title="VIEW NOW"
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {marginBottom: 10},
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  image: {width: 200, height: 200},
});

export default Home;
