export default [
  {
    path: 'https://github.com/ant-design/ant-design-pro-layout/issues',
    name: 'site',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    locale: '',
    target: '_blank',
    exact: true,
    key: 'https://github.com/ant-design/ant-design-pro-layout/issues',
    routes: null,
    parentKeys: ['/'],
  },
  {
    path: '/flex',
    name: 'flex 布局测试',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    exact: true,
    locale: 'menu.flex 布局测试',
    key: '/flex',
    routes: null,
    parentKeys: ['/'],
  },
  {
    path: '/dashboardanalysis',
    name: '分析页',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    exact: true,
    locale: 'menu.分析页',
    key: '/dashboardanalysis',
    routes: null,
    parentKeys: ['/'],
  },
  {
    path: '/accountsettings',
    name: '个人设置',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    exact: true,
    locale: 'menu.个人设置',
    key: '/accountsettings',
    routes: null,
    parentKeys: ['/'],
  },
  {
    path: '/formadvancedform',
    name: '高级表单',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    exact: true,
    locale: 'menu.高级表单',
    key: '/formadvancedform',
    routes: null,
    parentKeys: ['/'],
  },
  {
    path: '/single',
    name: 'Single',
    routes: null,
    children: [
      {
        path: '/single/welcome',
        name: 'two',
        routes: null,
        locale: 'menu.Single.two',
        key: '/single/welcome',
        icon: {
          type: {},
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        exact: true,
        parentKeys: ['/', '/single'],
      },
      {
        path: '/single/welcome2',
        name: 'two2',
        routes: null,
        locale: 'menu.Single.two2',
        key: '/single/welcome2',
        icon: {
          type: {},
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        exact: true,
        parentKeys: ['/', '/single'],
      },
    ],
    locale: 'menu.Single',
    key: '/single',
    parentKeys: ['/'],
  },
  {
    path: '/',
    name: 'welcome',
    icon: {
      type: {},
      key: null,
      ref: null,
      props: {},
      _owner: null,
      _store: {},
    },
    routes: null,
    children: [
      {
        path: '/welcome',
        name: 'one',
        icon: {
          type: {},
          key: null,
          ref: null,
          props: {},
          _owner: null,
          _store: {},
        },
        routes: null,
        locale: 'menu.welcome.one',
        key: '/welcome',
        children: [
          {
            path: '/welcome/repertoryFw',
            name: 'two',
            icon: {
              type: {},
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
            routes: null,
            locale: 'menu.welcome.one.two',
            key: '/welcome/repertoryFw',
            exact: true,
            parentKeys: ['/', 'welcome', '/welcome'],
          },
          {
            path: '/welcome/repertory',
            name: 'two2',
            icon: {
              type: {},
              key: null,
              ref: null,
              props: {},
              _owner: null,
              _store: {},
            },
            routes: null,
            locale: 'menu.welcome.one.two2',
            key: '/welcome/repertory',
            exact: true,
            parentKeys: ['/', 'welcome', '/welcome'],
          },
        ],
        parentKeys: ['/', 'welcome'],
      },
    ],
    locale: 'menu.welcome',
    key: 'welcome',
    parentKeys: ['/'],
  },
];
