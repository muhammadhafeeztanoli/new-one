import React from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';
import USA from "../images/usa.png";
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


const categories = ["iPhone", "Pixel", "Galaxy", "Oneplus","Macbook","iPad"];
export default props => {
  return (
    <Menu>
        <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          Categories
        </Space>
        
        {categories.map((e) =>{
          return(
            <Link to="/categories" state={e} className="categories">
              {e}
            </Link>
          )

        })}
      </Space>
      
      <Space className="flag-buttons" size={"large"}>
      <Space size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
      </Space>
      </Space>

    </Menu>
  );
};