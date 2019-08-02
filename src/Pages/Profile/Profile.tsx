import React, { Component } from "react";
import Auth from "../Authentication/Auth";

interface IProps {
  auth: Auth;
}

interface IState {
  // tslint:disable-next-line:no-any
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
    // tslint:disable-next-line:no-any
    this.props.auth.getProfile((error: string, profile: any) =>
      this.setState({ profile, error })
    );
  }

  public render() {
    const { profile } = this.state;
    if (!profile) {
      return <p>loading...</p>;
    }
    return (
      <>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 150, maxHeight: 150 }}
          src={profile.picture}
          alt="profile pic"
        />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    );
  }
}

export default Profile;
