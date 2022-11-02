import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
import routerConfig from '../../router/route'
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { selectedKeys as selectedKeysState } from '../../state'

const { Sider } = Layout

const SiderCom = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuData] = useState(routerConfig.map(v => ({ ...v, key: v.path })))
  const [selectedKeys, setSelectedKeys] = useRecoilState(selectedKeysState);
  const SiderWidth = 256

  useEffect(() => {
    setSelectedKeys(location.pathname)
  }, [location.pathname])

  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    navigate(key)
    setSelectedKeys(key)
  }

  return (
    <Sider width={SiderWidth} className={styles["layout-sider"]}>
      <Menu
        style={{ width: SiderWidth }}
        defaultSelectedKeys={selectedKeys}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        mode="inline"
        items={menuData}
      />
    </Sider>
  )
}

export default SiderCom
