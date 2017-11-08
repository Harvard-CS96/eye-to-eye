const isLoggedIn = state => state.user.isLoggedIn === true
const getUserId = state => state.user.id;

export {
    isLoggedIn,
    getUserId
}