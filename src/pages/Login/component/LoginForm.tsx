import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { type ChangeEvent } from 'react';
import { NavLink } from 'react-router';

const LoginForm = ({
  changeUserValue,
}: {
  changeUserValue: (
    field: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-6 ">
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
      </div>
      <div className="flex justify-between items-center">
        <Button className="w-16" sx={{ textTransform: 'none' }}>
          <NavLink to="/register">Register</NavLink>
        </Button>
        <Button
          variant="contained"
          className="w-32"
          sx={{ textTransform: 'none' }}>
          Done!
        </Button>
      </div>
    </>
  );
};
export default LoginForm;
