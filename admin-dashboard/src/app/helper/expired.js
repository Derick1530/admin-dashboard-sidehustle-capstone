export const isExpired = (token = localStorage.getItem("admin")) => {
    if (!token) {
        return true;
    }
    return false;
}