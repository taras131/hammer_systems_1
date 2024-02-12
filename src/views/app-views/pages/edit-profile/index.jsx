import React, {useEffect} from 'react';
import {Form, Button, Input, Row, Col} from 'antd';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getClientById, getClientsIsLoading} from "../../../../redux/selectors/Clients";
import Loading from "../../../../components/shared-components/Loading";
import {changeClient, fetchClients, setClientsLoading} from "../../../../redux/actions/Clients";
import {useHistory} from 'react-router-dom';
import {Card} from 'antd';

const EditProfile = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const history = useHistory();
    const profile = useSelector(state => getClientById(state, +id))
    const isLoading = useSelector(state => getClientsIsLoading(state))
    const onFinish = (values) => {
        dispatch(setClientsLoading(true))
        setTimeout(() => {
            dispatch(changeClient({
                id: profile.id,
                name: values.name,
                email: values.email,
                username: values.username,
                phone: values.phone,
                website: values.website,
                address: {
                    city: values.city,
                    street: values.street,
                    suite: values.suite,
                    zipcode: values.zipcode,
                    geo: {...profile.address.geo}
                },
                company: {
                    name: values.companyname,
                    catchPhrase: values.catchPhrase,
                    bs: values.bs
                }
            }))
            history.push('/app/pages/clients-list')
        }, 1000)


    }
    const onFinishFailed = () => {
        alert("Не все поля заполнены")
    }
    useEffect(() => {
        if (!profile) dispatch(fetchClients())
    })
    if (isLoading || !profile) return (<Loading/>)
    return (
        <Card>
            <Form
                name="basicInformation"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                layout="vertical"
                initialValues={
                    {
                        'name': profile.name,
                        'email': profile.email,
                        'username': profile.username,
                        'phone': profile.phone,
                        'website': profile.website,
                        'city': profile.address.city,
                        'street': profile.address.street,
                        'suite': profile.address.suite,
                        'zipcode': profile.address.zipcode,
                        'companyname': profile.company.name,
                        'catchPhrase': profile.company.catchPhrase,
                        'bs': profile.company.bs,
                    }
                }
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <Row gutter={ROW_GUTTER}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input name!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="E-mail"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input email!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Website"
                                    name="website"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input website!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input website!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Username!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Company Name"
                                    name="companyname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Company Name!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Company CatchPhrase"
                                    name="catchPhrase"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Company CatchPhrase!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Company Bs"
                                    name="bs"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Company Bs!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item
                                    label="City"
                                    name="city"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input city!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Street"
                                    name="street"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input street!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Suite"
                                    name="suite"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input suite!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Zipcode"
                                    name="zipcode"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input zipcode!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Button type="primary" htmlType="submit">
                            Save Change
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default EditProfile;