var React = require('react-native');
var window = require('Dimensions').get('window');

var {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text
} = React;

class Menu extends React.Component{
  navigateToThemes() {
    var Themes = require('../Screens/Themes');

    this.props.menuActions.close();
    this.props.toggleNavigation();
    this.props.navigator.push({
      component: Themes,
      title: 'Themes',
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => {
        this.props.navigator.pop();
        var self = this;
      },
      passProps: { navigator: this.props.navigator, toggleNavigation: this.props.toggleNavigation }
    })
  }
  navigateToSettings() {
    var Settings = require('../Screens/Settings');

    this.props.menuActions.close();
    this.props.toggleNavigation();
    this.props.navigator.push({
      component: Settings,
      title: 'Settings',
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => {
        this.props.navigator.pop();
        this.props.toggleNavigation();
      },
      passProps: { navigator: this.props.navigator, toggleNavigation: this.props.toggleNavigation }
    })
  }
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.items}>
          <View style={styles.stack}>
            <Text onPress={this.navigateToThemes.bind(this)} style={styles.item}>Themes</Text>
            <Text onPress={this.navigateToSettings.bind(this)} style={styles.item}>Macros Settings</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: (window.width / 4) * 3,
    height: window.height,
    backgroundColor: 'gray',

  },
  items: {
    flex: 1,
    height: window.height,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20
  },
  stack: {
    flex: 1,
  },
  item: {
    fontSize: 24,
    paddingTop: 5,
    color: 'white',
    flex: 1,
    flexDirection: 'column',

  },
});

module.exports = Menu;
