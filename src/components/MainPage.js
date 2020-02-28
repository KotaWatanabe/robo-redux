import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';


class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={this.filteredRobots()} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage;
