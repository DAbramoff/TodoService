import React from 'react';
import { Row, Col, Image, Divider, PageHeader } from 'antd';

class TodoHeader extends React.Component {
  render () {
    return (
        <div>
            <PageHeader style={{padding: '0px 0px'}}>
                <h1 className="h-1">Simple Todo Service</h1>
                <Divider style={{margin:'5px 0'}}/>
                <h4 className="h-3">Sinergy of Java, Groovy + Spring Boot and React JS</h4>
                <Divider style={{margin:'5px 0'}}/>
            </PageHeader>
            <Row gutter={16} className="image-h">
                <Col className="gutter-row" span={6} style={{textAlign:'center'}}>
                    <Image src="java.svg" preview={false}/>
                </Col>
                <Col className="gutter-row" span={6} style={{textAlign:'center'}}>
                    <Image src="groovy.svg" preview={false}/>
                </Col>
                <Col className="gutter-row" span={6} style={{textAlign:'center'}}>
                    <Image src="reactjs.svg" preview={false}/>
                </Col>
                <Col className="gutter-row" span={6} style={{textAlign:'center'}}>
                    <Image src="spring.svg" preview={false}/>
                </Col>
            </Row>
            <Divider style={{margin:'5px 0'}}/>
        </div>
    );
  }
}
export default TodoHeader;
