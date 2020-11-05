//菜单列表根据这个数组动态生成
const menuList = [
    {
        title: 'Home Page', //menu name菜单标题名称
        key: '/home', // route path对应的path
        icon: 'home', //icon name图标名称
    },

    {
        title: 'Product', //menu name
        key: '/products', // route path
        icon: 'appstore', //icon name
        children: [ //子菜单，可能有也可能没有
            {
                title: 'Category Manage', //menu name
                key: '/category', // route path
                icon: 'bars', //icon name
            },
            {
                title: 'Product Mange', //menu name
                key: '/product', // route path
                icon: 'tool', //icon name
            }
        ]
    },

    {
        title: 'User Page', //menu name
        key: '/user', // route path
        icon: 'mail', //icon name
    },
    {
        title: 'Role Page', //menu name
        key: '/role', // route path
        icon: 'mail', //icon name
    },


]

export default menuList