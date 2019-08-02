import React, { Component } from "react";
import Auth from "../Authentication/Auth";

interface IProps {}

interface IState {
  profile: any;
  error: string;
}

class Profile extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: "",
      profile: null
    };
  }

  public componentDidMount() {
    this.loadUserProfile();
  }

  public loadUserProfile() {
    Auth.getProfile((profile: any, error: string) =>
      this.setState({ profile, error })
    );
  }

  public render() {
    const { profile } = this.state;
    if (!profile) {
      return null;
    }
    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}

export default Profile;
