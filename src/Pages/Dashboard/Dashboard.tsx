import React, { Component } from "react";

interface IState {}

interface IProps {}

export default class Dashboard extends Component<IProps, IState> {
  public render(): JSX.Element {
    return <div>HI, I am dashabord. Naam toh suna hi hoga.</div>;
  }
}
