import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FluentProvider, teamsDarkTheme, Input, Label, Button, Link } from '@fluentui/react-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FluentProvider theme={teamsDarkTheme}>
    <div className={"input-block"}>
      <Label>
        Full Name:
      </Label>
      <Input />
    </div>
    <div className={"input-block"}>
      <Label>
        Your Email:
      </Label>
      <Input />
    </div>
    <div className={"input-block"}>
      <Label>
        Password:
      </Label>
      <Input />
    </div>
    <Link href="#">Forgotten Password?</Link>
    <div className={"buttons"}>
      <Button>Login</Button>
      <Button>Register</Button>
    </div>
  </FluentProvider>,
  root
);