export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
  users: [ ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  loading: false
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

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }
    
    default: return state
  }
}

export default usersReducer;


export const followAC = (userID) => ({
  type: FOLLOW,
  userID: userID
})

export const unfollowAC = (userID) => ({
  type: UNFOLLOW,
  userID: userID
})

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users
})

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
})
export const setUsersTotalCountAC = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount: totalCount
})