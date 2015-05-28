var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

class Themes extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.toggleNavigation}>
          <Text>
            Themes
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60
  }
})

module.exports = Themes;
