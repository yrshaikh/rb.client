import {Button, Form, Icon, Input} from "antd";
import * as React from "react";
import "./Authentication.scss";
import {IFormProps} from "./types/IFormProps";
import {IFormState} from "./types/IFormState";

abstract class BaseAuthentication extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            Email: "",
            FullName: "",
            Password: "",
        };
        this.onChange = this.onChange.bind(this);
    }

    protected renderForm(): JSX.Element {
        return (
            <div className="Authentication">
                <h1 className="Authentication__Header">{this.GetHeaderText()}</h1>
                <p className="Authentication__Description">{this.GetDescriptionText()}</p>
                <Form className="Authentication__Form">
                    {this.getFullNameFormItem()}
                    <Form.Item className="Authentication__Form__Row">
                        <Input
                            name="email"
                            className="Authentication__Form__TextBox"
                            prefix={<Icon type="user"/>}
                            placeholder="Email"
                            onChange={this.onChange}
                        />
                    </Form.Item>
                    <Form.Item className="Authentication__Form__Row">
                        <Input
                            name="password"
                            className="Authentication__Form__TextBox"
                            prefix={<Icon type="lock"/>}
                            placeholder="Password"
                            type="password"
                            onChange={this.onChange}
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
                <Form.Item className="Authentication__Form__Row">
                    <Input
                        name="full-name"
                        prefix={<Icon type="user"/>}
                        placeholder="Full Name"
                        onChange={this.onChange}
                    />
                </Form.Item>
            ) : null;
    }

    private onChange(e: any) {
        const value = e.target.value;
        if (!value) { return; }

        switch (e.target.name) {
            case "full-name": {
                this.setState(() => ({
                    FullName: value,
                }));
                break;
            }
            case "email": {
                this.setState(() => ({
                    Email: value,
                }));
                break;
            }
            case "password": {
                this.setState(() => ({
                    Password: value,
                }));
                break;
            }
            default:
                break;
        }
    }
}

export default BaseAuthentication;
