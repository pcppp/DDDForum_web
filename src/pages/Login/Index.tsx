import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState, type ChangeEvent } from 'react';
import { createUser } from '../../api/api';
import Register from './Register';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { useUser } from '../../contents/userProvider';
import Login from './Login';

const Index = () => {
  const navigate = useNavigate();
  const [loginFlag, setLoginFlag] = useState(true);
  const [userForm, setUserForm] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { setUser } = useUser();
  function changeUserValue(
    field: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    setUserForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function dispatchLoginFlag() {
    setUserForm({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setLoginFlag(!loginFlag);
  }
  const submit = async () => {
    try {
      const res = await createUser(userForm);
      const user = res.data;
      setUser(user);
      toast.success('欢迎' + user?.username);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex h-full w-full flex-col items-center p-6 md:pl-20 md:pr-20 lg:pl-30 lg:pr-30">
        <div className="w-full md:w-3/4">
          <Paper elevation={18} className="w-full h-full">
            <h1 className="text-5xl  font-bold text-gray-800 p-6">
              {!loginFlag ? 'Register' : 'Login'}
            </h1>
            <div className="flex flex-col gap-8 mt-8 p-20 pt-0">
              {loginFlag ? (
                <Login changeUserValue={changeUserValue}></Login>
              ) : (
                <Register changeUserValue={changeUserValue}></Register>
              )}
              <div className="flex justify-between items-center">
                <Button className="w-16" onClick={() => dispatchLoginFlag()}>
                  {loginFlag ? 'Register' : 'Login'}
                </Button>
                <Button
                  variant="contained"
                  className="w-32"
                  onClick={() => submit()}>
                  Done!
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};
export default Index;
