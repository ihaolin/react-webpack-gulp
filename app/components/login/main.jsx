/**
 * Author: haolin
 * Date  : 8/23/15.
 * Email : haolin.h0@gmail.com
 */
'use strict';

var React = require('react');

var Login = React.createClass({
    displayName: 'Login',
    getInitialState: function() {
        return {
            username: "",
            passwd: ""
        };
    },
    componentDidMount: function () {
        console.log('xxx');
    },
    onUsernameChange: function(e){
        this.setState({
            username: e.target.value
        });
    },
    onPasswdChange: function(e){
        this.setState({
            passwd: e.target.value
        });
    },
    doLogin: function(){
        var user = this.state.username;
        var pass = this.state.passwd;
        console.log("login with: " + user + ", " + pass);
    },
    render: function () {
        return (
            <div className="login-body">
                <input type="text" value={this.state.username} placeholder="请输入手机号" onChange={this.onUsernameChange} />
                <input type="password" value={this.state.passwd} placeholder="请输入密码" onChange={this.onPasswdChange}/>
                <button type="button" className="btn btn-block btn-warning" onClick={this.doLogin}>登录</button>
            </div>
        );
    }
});

module.exports = Login;


