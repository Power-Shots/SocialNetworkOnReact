const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [ ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 50,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type){
    case FOLLOW:
      return {...state, users: state.users.map(u => {
        if(u.id === action.userID){
          return {...u, followed: true}
        }

        return u;
      })};

    case UNFOLLOW:
      return {...state, users: state.users.map(u => {
        if(u.id === action.userID){
          return {...u, followed: false}
        };

        return u;
      })};
    
    case SET_USERS:
      return {...state, users: [...action.users]}

    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT: 
      return {...state, totalUsersCount: action.totalCount}

    case TOGGLE_IS_FETCHING: 
      return {...state, isFetching: action.isFetching}
    
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      console.log(action)
      return {...state, 
              followingInProgress: action.followingInProgress
              ? [...state.followingInProgress, action.userID] 
              : state.followingInProgress.filter(id => id !== action.userID)}
    
    
    default: return state
  }
}

export default usersReducer;


export const follow = (userID) => ({
  type: FOLLOW,
  userID: userID
})

export const unfollow = (userID) => ({
  type: UNFOLLOW,
  userID: userID
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users: users
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount: totalCount
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})

export const toggleFollowingProgress = (followingInProgress, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress: followingInProgress,
  userID: userID
})