import { Avatar, Card, Icon, Skeleton } from "antd";
import React, { Component } from "react";

const { Meta } = Card;

interface IState {}

interface IProps {}

export default class ResumeCard extends Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <Card
        style={{ width: 300, marginTop: 16, float: "left", marginRight: 20 }}
        actions={[
          <Icon type="download" />,
          <Icon type="edit" />,
          <Icon type="copy" />,
          <Icon type="delete" />,
        ]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            title="Resume #1"
            description="Updated : 08 June 2018 10:30 PM"
          />
        </Skeleton>
      </Card>
    );
  }
}
