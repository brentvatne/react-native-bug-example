var React = require('react-native');
var ScreenWithMenu = require('./App/Screens/ScreenWithMenu');

var {
  AppRegistry,
  StyleSheet,
  View,
  StatusBarIOS,
  NavigatorIOS
} = React;

class ReactNativeBug extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hideNavbar: false
    };
  }

  componentWillMount() {
    StatusBarIOS.setHidden(true);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState); // Object {hideNavbar: true} Object {hideNavbar: false}
    return true;
  }

  toggleNavigation() {
    console.log('clicked');

    this.setState({
      hideNavbar: !this.state.hideNavbar
    });
  }

  render() {
    var initialRoute = {
      component: ScreenWithMenu,
      title: 'Screen',
      passProps: {
        toggleNavigation: this.toggleNavigation.bind(this)
      }
    };

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={initialRoute}
        navigationBarHidden={this.state.hideNavbar}
        configureScene={() => Navigator.SceneConfigs.PushFromRight} />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeBug', () => ReactNativeBug);
