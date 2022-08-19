import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Header.css'
import Amazon from "../images/logo.png";
import USA from "../images/usa.png";
import BookStore from "../images/bookstore.png";
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";

const {Search } = Input;
const categories = ["iPhone", "Pixel", "Galaxy", "Oneplus","Macbook","iPad"];

const NonMobileHeader = () => {
  const { authenticate, account } = useMoralis();
  const navigate = useNavigate();

  const handleSearch = value => {
    if (value === "") {
        //
    } else {
      navigate("/searchResults", {state:{searchField:value}});
    }
  }

  return(
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
          <Link to="/home">
            <img src={Amazon} className="logo"></img>
          </Link>
          <a href="https://form.jotform.com/222235303673449" target="_blank" rel="noreferrer">
          <img src={BookStore} className="logo"></img>
          </a>
          <Search
              placeholder="Find A Product"
              enterButton
              className = "searchBar"
              onSearch={handleSearch}
            />
         {/* <Button 
         className="login"
         key="1" 
         type="primary" 
         onClick={() => authenticate()}>
          {account ? <span>{account.slice(0,5)}...</span> : <span>login</span>}
          </Button> */}
          <Space size={"large"}>
              
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag"></img>▾
              </Space>
              
            </Space>
          </>
        ]}>
      </PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
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
    </div>
    </div>
  )
}

export default NonMobileHeader;