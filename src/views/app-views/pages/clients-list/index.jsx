import React, {useState, useEffect} from 'react';
import {Card, Table, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {useSelector, useDispatch} from "react-redux";
import UserView from "./UserView";
import {deleteClients, fetchClients} from "../../../../redux/actions/Clients";
import Loading from "../../../../components/shared-components/Loading";
import {Link} from "react-router-dom";
import {getAllClients, getClientsIsLoading} from "../../../../redux/selectors/Clients";

const UserList = () => {
    const dispatch = useDispatch()
    const clients = useSelector(state => getAllClients(state))
    const isLoading = useSelector(state => getClientsIsLoading(state))
    const [userProfileVisible, setUserProfileVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const deleteUser = clientId => {
        dispatch(deleteClients(clientId))
        message.success({content: `Deleted user ${clientId}`, duration: 2});
    }
    const showUserProfile = userInfo => {
        setUserProfileVisible(true);
        setSelectedUser(userInfo);
    };
    const closeUserProfile = () => {
        setUserProfileVisible(false);
        setSelectedUser(null);
    }
    useEffect(() => {
        dispatch(fetchClients())
    }, [dispatch])
    if (isLoading) return (<Loading/>)
    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <Link to={`profile_edit/${record.id}`}>
                    <div className="d-flex">
                        <AvatarStatus src={""} name={record.name} subTitle={record.email}/>
                    </div>
                </Link>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },

        },
        {
            title: 'Company',
            dataIndex: 'company',
            render: company => (
                <span>{company.name}</span>
            ),
            sorter: (a, b) => {
                a = a.company.name.toLowerCase();
                b = b.company.name.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
        {
            title: 'City',
            dataIndex: 'address',
            render: address => (
                <span>{address.city}</span>
            ),
            sorter: (a, b) => {
                a = a.address.city.toLowerCase();
                b = b.address.city.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
        {
            title: 'Username',
            dataIndex: 'username',
            render: username => (
                <span>{username}</span>
            ),
            sorter: (a, b) => {
                a = a.username.toLowerCase();
                b = b.username.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
        {
            title: 'Website',
            dataIndex: 'website',
            render: website => (
                <span>{website}</span>
            ),
            sorter: (a, b) => {
                a = a.website.toLowerCase();
                b = b.website.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="View">
                        <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                            showUserProfile(elm)
                        }} size="small"/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined/>} onClick={() => {
                            deleteUser(elm.id)
                        }} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];
    return (
        <Card bodyStyle={{'padding': '0px'}}>
            <Table columns={tableColumns} dataSource={clients} rowKey='id'/>
            <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile}/>
        </Card>
    );
};

export default UserList;