import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { type ChangeEvent } from 'react';
import { NavLink } from 'react-router';

const RegisterForm = ({
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
        label="firstName"
        variant="outlined"
        onChange={(e) => changeUserValue('firstName', e)}
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="lastName"
        variant="outlined"
        onChange={(e) => changeUserValue('lastName', e)}
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        onChange={(e) => changeUserValue('email', e)}
        fullWidth
      />
      <div className="flex justify-between items-center">
        <Button className="w-16" sx={{ textTransform: 'none' }}>
          <NavLink to="/login">login</NavLink>
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
export default RegisterForm;
