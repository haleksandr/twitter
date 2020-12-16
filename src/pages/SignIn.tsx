import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
  //   button: {
  //     fontWeigh: 700,
  //   },
  //   lightBulb: {
  //     verticalAlign: 'middle',
  //     marginRight: theme.spacing(1),
  //   },
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 85px)',
    overflowY: 'scroll',
  },
  blueBlock: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#1DA1F2',
    backgroundColor: 'lightblue',
    flex: '0 0 50%',
    width: 380,
    overflow: 'hidden',
  },
  blueBlockBigIcon: {
    position: 'absolute',
    left: '75%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
  },
  blueBlockListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueBlockListIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  loginBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginBlockTwitterIcon: {
    fontSize: 50,
  },
  loginBlockWrapper: {
    width: 380,
  },
  loginBlockTitle: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 45,
    marginTop: 20,
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueBlock}>
        <TwitterIcon color="primary" className={classes.blueBlockBigIcon} />
        <ul className={classes.blueBlockListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={classes.blueBlockListIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueBlockListIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon className={classes.blueBlockListIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginBlock}>
        <div className={classes.loginBlockWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginBlockTwitterIcon}
          />
          <Typography className={classes.loginBlockTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
