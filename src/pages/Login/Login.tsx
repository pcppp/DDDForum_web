import TextField from '@mui/material/TextField';
import { type ChangeEvent } from 'react';

const Login = ({
  changeUserValue,
}: {
  changeUserValue: (
    field: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="username"
        fullWidth
        onChange={(e) => changeUserValue('username', e)}
      />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        onChange={(e) => changeUserValue('email', e)}
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={(e) => changeUserValue('password', e)}
        fullWidth
      />
    </>
  );
};
export default Login;
