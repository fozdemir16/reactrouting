import logo from './logo.svg';
import './App.css';
import { createRoot } from 'react-dom/client';
import { UserOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';




import {Button,Space,Select,Input,InputNumber,Form,Radio,Table,Card,Row,Col} from 'antd'


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
 
 
];

const data = [
  {
    key: '1',
    name: 'D1',
    time: 15,
    personel: 4,
    
  },
  {
    key: '2',
    name: 'D2',
    time: 32,
    personel: 4,
    
  },
  {
    key: '3',
    name: 'D3',
    time: 17,
    personel: 4,
    
  },
  {
    key: '4',
    name: 'D4',
    time: 18,
    personel: 4,
    
  },
  {
    key: '5',
    name: 'D5',
    time: 22,
    personel: 4,
    
  },
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};




const App = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional','optional1','optional2','optional3','optional4');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    
        <Form
        form={form}
        layout="vertical"
        initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value="optional" id='multipack'>Multipack</Radio.Button>
          <Radio.Button value="optional1" id='handpacking'>Handpacking</Radio.Button>
          <Radio.Button value="optional2" id='jar'>Jar</Radio.Button>
          <Radio.Button value="optional3" id='doypack'>Doypack</Radio.Button>
          <Radio.Button value="optional4" id='single'>Single</Radio.Button>
          
        </Radio.Group>
        
      </Form.Item>
      <Form.Item label="Product Code" required tooltip="This is a required field" style={{width: 500}}>
        <Input placeholder="" />

        
      </Form.Item>
      <Form.Item label="in Palette " required tooltip="How many boxes are in a pallet?"style={{width: 500,}}>
        <Input placeholder="" />
      </Form.Item>
      <Space direction="vertical" size={16}>
    
    
  </Space>

      <Form.Item
        label="Number of Pallets"
        tooltip={{
          title: 'Calculate how many palles',
          icon: <InfoCircleOutlined />,
          
        }}
        style={{width: 500}}
      >
        
        <Input placeholder="" />

        
      </Form.Item>
      
      <Form.Item>
        

        <Card title="Results" bordered={false} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    
  </Card>
      </Form.Item>
      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </Form>

    
    

   
  );
};
export default App;

