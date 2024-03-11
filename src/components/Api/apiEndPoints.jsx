import config from '../config/default.json'

const apiWithoutHost = {
    LOGIN : "/login",
    REGISTER: "/register",
    PRODUCTS: "/products",
    AUTH : "api/auth/test",
};

const apiEndPoints = Object.keys(apiWithoutHost).reduce((a, b) => {
    a[b] = `${config.apiHost}${apiWithoutHost[b]}`;
    return a;
}, {});

export default apiEndPoints;
