import React, { Component } from "react";
import Auth from "../Authentication/Auth";

interface IProps {
  auth: Auth;
}

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

  public componentDidMount(): void {
    this.loadUserProfile();
  }

  public loadUserProfile(): void {
    this.props.auth.getProfile((error: string, profile: any) =>
      this.setState({ profile, error })
    );
  }

  public render(): JSX.Element {
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
