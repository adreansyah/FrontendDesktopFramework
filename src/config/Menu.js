const isMenus = [
    {
        key: "home",
        icon: "home",
        label: "Home",
        link: "/",
        children: []
    }, {
        key: "menu",
        icon: "exchange",
        label: "Menu",
        link: null,
        children: [
            {
                key: "sample-page",
                icon: "twist",
                label: "Sample Page",
                link: "/sample-page",
                parent: "menu",
                children: []
            },
            {
                key: "form-validation",
                icon: "twist",
                label: "Form Validation",
                link: "/form-validation",
                parent: "menu",
                children: []
            },
            {
                key: "sample-crud",
                icon: "twist",
                label: "Sample Crud",
                link: "/sample-crud",
                parent: "menu",
                children: []
            },
            {
                key: "not-found",
                icon: "twist",
                label: "Page Not Found",
                link: "/not-found",
                parent: "menu",
                children: []
            }
        ]
    }, {
        key: "redux",
        icon: "point",
        label: "Redux",
        link: null,
        children: [
            {
                key: "sample-redux",
                icon: "twist",
                label: "Sample Redux",
                link: "/sample-redux",
                parent: "redux",
                children: []
            }
        ]
    }, {
        key: "graphql",
        icon: "point",
        label: "GRAPHQL",
        link: '/',
        children: []
    }
];
export default isMenus