import React from 'react';
import { BookBookmark, CalendarPlus, PawPrint } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Div } from './assets/elements/common.js';

// #48ff9a

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#f8f9fc',
    fontSize: '2rem',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2%',
  },
});


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Div>
          <Button>
            <BookBookmark size={38} color="#48ff9a" />
          </Button>
          <Button>
            <PawPrint size={38} color="#48ff9a" />
          </Button>
          <Button>
            <CalendarPlus size={38} color="#48ff9a" />
          </Button>
        </Div>
      </View>
    );
  }
};

export default App;
