import React, {useState, useEffect, useCallback} from 'react';
import {Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

const URL = 'http://localhost:3000/api/v1';

const Home = () => {
  const [qRCodes, setQRCodes] = useState([]);

  const getQRCodes = useCallback(async () => {
    const response = await fetch(URL);
    const qrs = await response.json();

    if (response.ok) {
      setQRCodes(qrs.data);
    }
  }, []);

  useEffect(() => {
    getQRCodes();
  }, []);

  return (
    <Card title="HELLO WORLD" image={require('../images/pic2.jpg')}>
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};
