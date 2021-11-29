import React, {Component} from 'react'
import SockJsClient from "react-stomp";

import "./home.less";

const SOCKET_URL = "http://localhost:8888/notification";
const GENERAL_TOPIC = "/topic/pubic";

/*
首页路由组件
*/
class Home extends Component {
    constructor(props) {
        super(props);
    }

    sendMessage = (msg) => {
        this.clientRef.sendMessage('/sendMessage', msg);  //@注解1
    }

    render() {
        return (
            <div>
                <SockJsClient url='http://localhost:8888/ws' topics={['/topic/pubic']}
                              onMessage={(msg) => {
                                  alert(msg);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                <div>99999</div>
            </div>
        );
    }
}
export default Home