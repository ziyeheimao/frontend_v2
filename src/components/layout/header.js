import React from "react";
import { Layout } from "antd";
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout;

const HeaderCom = () => {
  const navigate = useNavigate()

  const toHome = () => {
    navigate('/home')
  }

  return (
    <Header className={styles["layout-header"]}>
      <div className={styles["logo"]} onClick={toHome}>Logo</div>
      <div className={styles["name"]} onClick={toHome}>商品评论分析</div>
    </Header>
  );
};

export default HeaderCom;
