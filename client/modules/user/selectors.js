const isAuthenticated = state => state.user.isAuthenticated === true
const getUserId = state => state.user.id;
const getUserName = state => state.user.name;

export {
    isAuthenticated,
    getUserId,
    getUserName
}