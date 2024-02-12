import React from 'react';
import {Drawer, Divider} from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    UserOutlined,
    CompassOutlined,
    GlobalOutlined,
    BarcodeOutlined,
    HomeOutlined,
    BranchesOutlined,
    BorderlessTableOutlined
} from '@ant-design/icons';

const UserView = ({data, visible, close}) => {

    return (
        <Drawer
            width={300}
            placement="right"
            onClose={close}
            closable={false}
            visible={visible}
        >
            <div className="text-center mt-3">
                <h3 className="mt-2 mb-0">{data?.name}</h3>
                <span className="text-muted">{data?.email}</span>
            </div>
            <Divider dashed/>
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Account details</h6>
                <p>
                    <UserOutlined/>
                    <span className="ml-3 text-dark">id: {data?.id}</span>
                </p>
                <p>
                    <GlobalOutlined/>
                    <span className="ml-3 text-dark">website: {data?.website}</span>
                </p>
            </div>
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Company</h6>
                <p>
                    <UserOutlined/>
                    <span className="ml-3 text-dark">name: {data?.company.name}</span>
                </p>
                <p>
                    <GlobalOutlined/>
                    <span className="ml-3 text-dark">catchPhrase: {data?.company.catchPhrase}</span>
                </p>
                <p>
                    <GlobalOutlined/>
                    <span className="ml-3 text-dark">bs: {data?.company.bs}</span>
                </p>
            </div>
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Address:</h6>
                <p>
                    <CompassOutlined/>
                    <span className="ml-3 text-dark">city: {data?.address.city}</span>
                </p>
                <p>
                    <BranchesOutlined/>
                    <span className="ml-3 text-dark">street: {data?.address.street}</span>
                </p>
                <p>
                    <HomeOutlined/>
                    <span className="ml-3 text-dark">suite: {data?.address.suite}</span>
                </p>
                <p>
                    <BarcodeOutlined/>
                    <span className="ml-3 text-dark">zipcode: {data?.address.zipcode}</span>
                </p>
            </div>
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Geo:</h6>
                <p>
                    <BorderlessTableOutlined/>
                    <span className="ml-3 text-dark">lat: {data?.address.geo.lat}</span>
                </p>
                <p>
                    <BorderlessTableOutlined/>
                    <span className="ml-3 text-dark">lng: {data?.address.geo.lng}</span>
                </p>
            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
                <p>
                    <MobileOutlined/>
                    <span className="ml-3 text-dark">{data?.phone}</span>
                </p>
                <p>
                    <MailOutlined/>
                    <span className="ml-3 text-dark">{data?.email}</span>
                </p>
            </div>
        </Drawer>
    );
};

export default UserView;