import React, {useEffect} from 'react';
import {Form, Button, Input, Row, Col} from 'antd';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getClientsIsLoading, getEditionClient} from "../../../../redux/selectors/Clients";
import Loading from "../../../../components/shared-components/Loading";
import {
    changeClient,
    fetchClientByID,
    setClientsLoading,
    setEditionClient
} from "../../../../redux/actions/Clients";
import {useHistory} from 'react-router-dom';
import {Card} from 'antd';

const EditProfile = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const history = useHistory();
    const profile = useSelector(state => getEditionClient(state, +id))
    const isLoading = useSelector(state => getClientsIsLoading(state))
    const getRules = (name) => ([{required: true, message: `Please input ${name}`}])
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
            dispatch(setEditionClient({}))
            history.push('/app/pages/clients-list')
        }, 1000)
    }
    const onFinishFailed = () => {
        alert("Не все поля заполнены")
    }
    useEffect(() => {
        dispatch(fetchClientByID(id))
    }, [dispatch, id])
    if (isLoading) return (<Loading/>)
    if (!profile.name) return (<p>{`Не удаётся найти клиента с id: ${id} , Попробуйте позже`}</p>)
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
                onFinishFailed={onFinishFailed}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={16}>
                        <Row gutter={ROW_GUTTER}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item label="Name" name="name" rules={getRules("Name")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="E-mail" name="email" rules={getRules("E-mail")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Website" name="website" rules={getRules("Website")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Phone" name="phone" rules={getRules("Phone")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Username" name="username" rules={getRules("Username")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Company Name" name="companyname" rules={getRules("Company Name")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Company CatchPhrase" name="catchPhrase"
                                           rules={getRules("Company CatchPhrase")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Company Bs" name="bs" rules={getRules("Company Bs")}>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="City" name="city" rules={getRules("City")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Street" name="street" rules={getRules("Street")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Suite" name="suite" rules={getRules("Suite")}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="Zipcode" name="zipcode" rules={getRules("Zipcode")}>
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