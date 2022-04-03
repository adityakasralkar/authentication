import React,{useContext} from 'react';
import AuthContex from '../store/auth-contex';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
const authctx = useContext(AuthContex);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
