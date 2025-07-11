import { Paper } from '@mui/material';
import RegisterForm from './component/RegisterForm';

const Register = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="w-full max-w-2xl min-w-[50vw] min-h-[50vw]">
          <Paper elevation={18} className="w-full p-12 ">
            <h1 className="text-5xl font-bold text-gray-800 p-12">
              {'Register'}
            </h1>
            <div className="flex flex-col gap-8 mt-8 p-20 pt-0">
              <RegisterForm></RegisterForm>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};
export default Register;
