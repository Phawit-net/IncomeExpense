// component's config object.
const components = {
    login: {
        component: 'LoginPage',
        url: '/login',
    },
    signup: {
        component: 'SignupPage',
        url: '/signup',
    },
    mainPage: {
        component: 'MainPage',
        url: '/',
    }
};

export default {
    //role name as a key.
    admin: {
        routes: [...Object.values(components)],
    },
    user: {
        routes: [
            components.mainPage,
        ]
    },
    guest: {
        routes: [
            components.login,
            components.signup,
        ]
    }
}