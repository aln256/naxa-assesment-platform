import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginActions from '@Actions/login';
import Navbar from '@Components/common/Navbar/index';
import Detail from '@Components/common/Detail/index';

function Dashboard() {
  return (
    <div className="flex flex-row h-screen  bg-gray-50 ">
      <div className="basis-1/5">
        <Navbar />
      </div>
      <div className="basis-4/5">
        <Detail />
      </div>
    </div>
  );
}

// Dashboard.propTypes = {
//   username: PropTypes.string.isRequired,
//   logoutRequest: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => {
  const {
    login: {
      user: { username },
    },
  } = state;
  return {
    username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: (payload) => dispatch(loginActions.logoutRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
