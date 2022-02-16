import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginActions from '@Actions/login';
import Loader from '@Components/common/Loader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const {
      state: { username, password },
      props: { loginRequest },
    } = this;

    loginRequest({ username, password });
  };

  render() {
    const {
      state: { username, password },
      props: { loading },
      handleInputChange,

      handleLogin,
    } = this;

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        <div className="grid place-items-center mt-24">
          <div className="">
            <h1 className="text-center text-xl font-mono  ">Login to continue to Bootsnipp</h1>

            <div className="rounded-lg bg-gray-300 mt-4">
              <div className="pt-[12px]">
                <img
                  className="profile-img"
                  src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt=""
                />
              </div>

              <form className="flex flex-col gap-4 mx-4 my-8" onSubmit={handleLogin}>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />

                <div className="flex flex-col gap-4 py-4 text-center ">
                  <Link to="/login">
                    <button
                      className="bg-red-300 px-8 py-2 text-black  rounded-xl cursor-pointer hover:bg-red-400 hover:text-white"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      className="bg-red-300 px-6 rounded-xl py-2 cursor-pointer hover:bg-red-400 hover:text-white"
                      type="submit"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    login: { loading },
  } = state;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(loginActions.loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
