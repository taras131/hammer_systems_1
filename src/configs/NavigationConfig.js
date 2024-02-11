import {
    DashboardOutlined,
    AppstoreOutlined,
    AntDesignOutlined,
    SafetyOutlined,
    StopOutlined,
    PlusCircleOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    UsergroupAddOutlined,
    MailOutlined,
    SettingOutlined,
    MobileOutlined,
    ShoppingOutlined,
    FileTextOutlined,
} from '@ant-design/icons';

import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from 'configs/AppConfig'

const mainNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [
        {
            key: 'dashboards-default',
            path: `${APP_PREFIX_PATH}/pages/dashboards/`,
            title: 'sidenav.main.dashboard',
            icon: DashboardOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'sidenav-main-catalog',
            path: `${APP_PREFIX_PATH}/pages/catalog`,
            title: 'sidenav.main.catalog',
            icon: ShoppingCartOutlined,
            breadcrumb: true,
            submenu: [
                {
                    key: 'sidenav-main-catalog-products',
                    path: `${APP_PREFIX_PATH}/pages/catalog/products`,
                    title: 'sidenav.main.catalog.products',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                },
                {
                    key: 'sidenav-main-catalog-categories',
                    path: `${APP_PREFIX_PATH}/pages/catalog/categories`,
                    title: 'sidenav.main.catalog.categories',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'sidenav-main-catalog-collections',
                    path: `${APP_PREFIX_PATH}/pages/catalog/collections`,
                    title: 'sidenav.main.catalog.collections',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'sidenav-main-catalog-combo',
                    path: `${APP_PREFIX_PATH}/pages/catalog/combo`,
                    title: 'sidenav.main.catalog.combo',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'order-default',
            path: `${APP_PREFIX_PATH}/pages/order`,
            title: 'sidenav.main.order',
            icon: ShoppingOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'clients-default',
            path: `${APP_PREFIX_PATH}/pages/clients`,
            title: 'sidenav.main.clients',
            icon: UserOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'sidenav-main-clients-list',
                    path: `${APP_PREFIX_PATH}/pages/clients-list`,
                    title: 'sidenav.main.clients.list',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'sidenav-main-clients-groups',
                    path: `${APP_PREFIX_PATH}/pages/clients/groups`,
                    title: 'sidenav.main.clients.groups',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'banners-default',
            path: `${APP_PREFIX_PATH}/pages/banners`,
            title: 'sidenav.main.banners',
            icon: PictureOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'gifts-default',
            path: `${APP_PREFIX_PATH}/pages/gifts`,
            title: 'sidenav.main.gifts',
            icon: GiftOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'points-default',
            path: `${APP_PREFIX_PATH}/pages/points`,
            title: 'sidenav.main.points',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'points-addresses',
                    path: `${APP_PREFIX_PATH}/pages/points/addresses`,
                    title: 'sidenav.main.points.addresses',
                    icon: "",
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'points-geofences',
                    path: `${APP_PREFIX_PATH}/pages/points/geofences`,
                    title: 'sidenav.main.points.geofences',
                    icon: "",
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'workers-default',
            path: `${APP_PREFIX_PATH}/pages/workers`,
            title: 'sidenav.main.points.workers',
            icon: UsergroupAddOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'mailing-default',
            path: `${APP_PREFIX_PATH}/pages/mailing`,
            title: 'sidenav.main.points.mailing',
            icon: MailOutlined,
            breadcrumb: false,
            submenu: []
        },
    ]
}]
const systemsNavTree = [
    {
        key: 'systems',
        path: `${APP_PREFIX_PATH}/systems`,
        title: 'sidenav.systems',
        icon: AntDesignOutlined,
        breadcrumb: true,
        submenu: [
            {
                key: 'systems-settings',
                path: `${APP_PREFIX_PATH}/systems/general`,
                title: 'sidenav.systems.settings',
                icon: SettingOutlined,
                breadcrumb: true,
                submenu: []
            },

            {
                key: 'systems-mobil_apps',
                path: `${APP_PREFIX_PATH}/systems/mobil_apps`,
                title: 'sidenav.systems.mobil_apps',
                icon: MobileOutlined,
                breadcrumb: true,
                submenu: []
            },
            {
                key: 'systems-logs',
                path: `${APP_PREFIX_PATH}/systems/logs`,
                title: 'sidenav.systems.logs',
                icon: FileTextOutlined,
                breadcrumb: true,
                submenu: []
            },
        ]

    },
]
const navigationConfig = [
    ...mainNavTree,
    ...systemsNavTree,
]

export default navigationConfig;
