import {Col, Row} from "antd";
import * as React from "react";
import "./Authentication.scss";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

// tslint:disable-next-line:no-any
class Authentication extends React.Component<{}, any> {
    public render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <LoginPage/>
                    </Col>
                    <Col span={12}>
                        <RegisterPage/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Authentication;
