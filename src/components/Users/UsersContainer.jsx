import React, {Component} from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching } from "../../redux/usersReducer";
import s from './Users.module.css'
import * as axios from 'axios';
import preloaderSVG from './../../assets/images/preloader/Double Ring-2.6s-200px.svg'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

export class UsersContainer extends Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>  {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
          this.props.toggleIsFetching(false)
        })
  }


  getUsers = (pageNumber = this.props.currentPage) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.toggleIsFetching(false)
        })  
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    this.getUsers(pageNumber);
    

  }


  render() {

    return (
      <>
        {this.props.isFetching
        ? <Preloader/>
        : <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>}
        
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);


// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

