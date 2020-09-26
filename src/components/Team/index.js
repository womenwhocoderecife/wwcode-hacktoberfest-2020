import React, { Component } from 'react';
import fakeData from '../../data/fake_data.json';
import Session from './Session';
import { TeamContainer, TeamNav, TeamLink } from './styles';

class Team extends Component {
  constructor() {
    super();
    const { directors, evangelist, leads, volunteers, members } = fakeData;

    this.state = {
      menus: [
        {
          name: 'directors',
          comp: () => (
            <Session
              data={directors.data}
              title={directors.title}
              subtitle={directors.subtitle}
            />
          ),
        },
        {
          name: evangelist.title,
          comp: () => (
            <Session
              data={evangelist.data}
              title={evangelist.title}
              subtitle={evangelist.subtitle}
            />
          ),
        },
        {
          name: leads.title,
          comp: () => (
            <Session
              data={leads.data}
              title={leads.title}
              subtitle={leads.subtitle}
            />
          ),
        },
        {
          name: volunteers.title,
          comp: () => (
            <Session
              data={volunteers.data}
              title={volunteers.title}
              subtitle={volunteers.subtitle}
            />
          ),
        },
        {
          name: members.title,
          comp: () => (
            <Session
              data={members.data}
              title={members.title}
              subtitle={members.subtitle}
            />
          ),
        },
      ],
      menuDefault: 0,
      session: null,
    };
  }

  componentDidMount() {
    const { menuDefault } = this.state;
    this.showSession(menuDefault);
  }

  createMenus() {
    const { menus } = this.state;
    return menus.map((m, i) => (
      <TeamLink onClick={this.showSession.bind(this, i)} key={i}>
        {m.name}
      </TeamLink>
    ));
  }

  showSession(index) {
    const { menus } = this.state;
    this.setState({ session: menus[index].comp() });
  }

  render() {
    const { session } = this.state;
    return (
      <TeamContainer>
        <TeamNav>{this.createMenus()}</TeamNav>
        {session && session}
      </TeamContainer>
    );
  }
}

export default Team;
