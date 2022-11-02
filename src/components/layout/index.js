import React from "react";
import { Layout } from "antd";
import Header from "./header";
// import Sider from "./sider";
import AuthRouteSwitch from "../../router";
import styles from './index.module.scss'

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Layout className={styles["sider-wrapper"]}>
        {/* <Sider /> */}

        <Content className={styles["layout-content"]}>
          <AuthRouteSwitch />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
