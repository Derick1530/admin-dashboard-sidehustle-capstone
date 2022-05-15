
const getCurrentUser = (token = localStorage.getItem("admin")) => {
    if (token) {
        return token
    }
    return null;
};

export default getCurrentUser;
