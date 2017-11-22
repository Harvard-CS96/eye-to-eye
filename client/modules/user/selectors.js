const isAuthenticated = state => state.user.isAuthenticated === true
const getUserId = state => state.user.id;
const getUserName = state => state.user.name;
const getBadges = state => state.user.badges;

export {
    isAuthenticated,
    getUserId,
    getUserName,
    getBadges
}