export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    // {
    //   id: 1,
    //   fullname: 'Dmitriy K.',
    //   photoUrl: 'https://www.tadviser.ru/images/thumb/a/aa/Elon-musk-850.jpg/840px-Elon-musk-850.jpg',
    //   status: 'Bla Bla',
    //   location: {
    //     country: 'Belarus',
    //     city: 'Minsk'
    //   },
    //   followed: false, 
    // },
    // {
    //   id: 2,
    //   fullname: 'Elena Z.',
    //   photoUrl: 'https://www.tadviser.ru/images/thumb/a/aa/Elon-musk-850.jpg/840px-Elon-musk-850.jpg',
    //   status: 'Haha',
    //   location: {
    //     country: 'Ukraine',
    //     city: 'Kiev'
    //   },
    //   followed: false, 
    // },
    // {
    //   id: 3,
    //   fullname: 'Mihail G.',
    //   photoUrl: 'https://www.tadviser.ru/images/thumb/a/aa/Elon-musk-850.jpg/840px-Elon-musk-850.jpg',
    //   status: 'I love sweets',
    //   location: {
    //     country: 'Russia',
    //     city: 'Moslow'
    //   },
    //   followed: true, 
    // },
  ],
  limit: 4,
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
      return {...state, users: [...state.users, ...action.users]}
    
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