import config from '../Config/default.json'

const apiWithoutHost = {
    LOGIN: "/login",
    REGISTER: "/register",
    PRODUCTS: "/products",
    AUTH: "/api",
};

const apiEndPoints = Object.keys(apiWithoutHost).reduce((a, b) => {
    a[b] = `${config.apiHost}${apiWithoutHost[b]}`;
    return a;
}, {});

export default apiEndPoints;
