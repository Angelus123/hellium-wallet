import React from "react";
import styled from "styled-components";
import { Col, Steps, Space } from 'antd';
import { ArrowUpRight } from 'react-feather';
import { STEPS } from "../lib/steps-config";

const { Step } = Steps;

const Sidebar = ({ stepIndex }) => {
  return (
    <Left span={8}>
     

      <Steps direction="vertical" size="small" current={stepIndex}>
        {STEPS.map(s => <Step key={s.id} title={s.title} />)}
      </Steps>

      <Footer>
        <Space align="center">
        <div>BTC CHALLENGE</div>
          <ArrowUpRight color="white" size="24" />
        </Space>
      </Footer>
    </Left>
  )
}

const Left = styled(Col)`
  background: white;
  padding: 40px 0 0 40px;
  height: 100vh;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;

  a {
    color: white;
    font-weight: 600;
  }
`;

export default Sidebar