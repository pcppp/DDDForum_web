import TextField from '@mui/material/TextField';
import { type ChangeEvent } from 'react';

const Register = ({
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
    </>
  );
};
export default Register;
