import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Header.css'
import Amazon from "../images/logo.png";
import USA from "../images/usa.png";
import BookStore from "../images/bookstore.png";
import {ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";
import Sidebar from './Sidebar';
const {Search } = Input;
const categories = ["iPhone", "Pixel", "Galaxy", "Oneplus","Macbook","iPad"];

const MobileHeader = () => {
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
    <div id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="site-page-header-ghost-wrapper" id="page-wrap">
        
         <PageHeader
        ghost={false}
        extra={[
          <>
          <Link to="/">
            <img src={Amazon} className="logo-mob"></img>
          </Link>
          <Search
              placeholder="Find A Product"
              enterButton
              className = "searchBar-mob"
              onSearch={handleSearch}
          />
         <Button 
         key="1" 
         className='login-btn-mob'
         onClick={() => authenticate()}>
          {account ? <span>{account.slice(0,5)}...</span> : <span>login</span>}
          </Button>
          
          </>
        ]}>
      </PageHeader>
    </div>
    </div>
  )
}

export default MobileHeader;