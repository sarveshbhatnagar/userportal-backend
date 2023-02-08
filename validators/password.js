export const validateLoginPassword = (password) => {
    if (!password) {
        return false;
    }
    return true;
}