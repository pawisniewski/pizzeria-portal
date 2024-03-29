import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getAll, fetchFromAPI, getLoadingState, changeStatusInAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (id, status) => dispatch(changeStatusInAPI(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
