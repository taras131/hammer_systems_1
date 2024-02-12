import React, {useState, useEffect} from 'react';
import {Card, Table, Tag, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {useSelector, useDispatch} from "react-redux";
import UserView from "./UserView";
import moment from 'moment';
import {deleteClients, fetchClients} from "../../../../redux/actions/Clients";
import Loading from "../../../../components/shared-components/Loading";

const UserList = () => {
    const clients = useSelector(state => state.clients.clients)
    const isLoading = useSelector(state => state.clients.loading)

    const dispatch = useDispatch()
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
    }, [])

    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
                </div>
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
            title: 'Role',
            dataIndex: 'role',
            sorter: {
                compare: (a, b) => a.role.length - b.role.length,
            },
        },
        {
            title: 'Last online',
            dataIndex: 'lastOnline',
            render: date => (
                <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
            ),
            sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status => (
                <Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
            ),
            sorter: {
                compare: (a, b) => a.status.length - b.status.length,
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
                            console.log(elm.id)
                            deleteUser(elm.id)
                        }} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];
    if(isLoading) return (<Loading/>)
    return (
        <Card bodyStyle={{'padding': '0px'}}>
            <Table columns={tableColumns} dataSource={clients} rowKey='id'/>
            <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile}/>
        </Card>
    );
};

export default UserList;