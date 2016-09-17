import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from '../components/Main';
injectTapEventPlugin();
class App extends Component {
  render() {
    const {actions} = this.props;

    return(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Main actions={actions} />
        </MuiThemeProvider>
      )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
