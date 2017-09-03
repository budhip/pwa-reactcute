import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Container from './Container';

class Jobs extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData('jobs', page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData('jobs', newPage));
    }
  }

  render() {
    const { jobs } = this.props;
    return <div>
      {this.renderList(jobs)}
      {this.renderPage('jobs')}
    </div>;
  }
}

const mapStateToProps = state => state.hnReducer;

export default connect(mapStateToProps)(Jobs);
