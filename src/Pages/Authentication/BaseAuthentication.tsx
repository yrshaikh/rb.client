import {Button, Form, Icon, Input} from "antd";
import * as React from "react";
import "./Authentication.scss";

abstract class BaseAuthentication extends React.Component<{}, any> {
    private baseClassName: string = "";

    protected renderForm(): JSX.Element {
        return (
            <div className="Authentication">
                <h1 className="Authentication__Header">{this.GetHeaderText()}</h1>
                <p className="Authentication__Description">{this.GetDescriptionText()}</p>
                <Form className="Authentication__Form">
                    {this.getFullNameFormItem()}
                    <Form.Item>
                        <Input
                            className="Authentication__Form__TextBox"
                            prefix={<Icon type="user"/>}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            className="textbox"
                            prefix={<Icon type="lock"/>}
                            placeholder="Password"
                            type="password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="Authentication__Form__Button">
                            {this.GetButtonText()}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    protected abstract ShouldShowFullNameField(): boolean;

    protected abstract GetButtonText(): string;

    protected abstract GetHeaderText(): string;

    protected abstract GetDescriptionText(): string;

    private getFullNameFormItem() {
        return this.ShouldShowFullNameField() ?
            (
                <Form.Item>
                    <Input
                        prefix={<Icon type="user"/>}
                        placeholder="Username"
                    />
                </Form.Item>
            ) : null;
    }
}

export default BaseAuthentication;
