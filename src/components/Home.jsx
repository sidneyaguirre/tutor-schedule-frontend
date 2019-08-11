import React, { Component } from "react";
import { Input, Menu, Image } from "semantic-ui-react";
import { SidebarMenu } from "./Sidebar";

export class Home extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu color="blue" inverted={true} secondary>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Image src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" avatar />
              <span>Username</span>
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
