import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from '../store/actions/clientActions.jsx';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginThunk(data.email, data.password, data.rememberMe))

      if (response && response.token) {
        toast.success('Login Successful!');
        history.goBack();
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <section className = "flex flex-col justify-center mx-12 2xl:mx-[40rem] md:mx-[32rem] my-4 md:pt-[4rem] md:pb-[2rem]">
    <form onSubmit={handleSubmit(onSubmit)}>
    <h3 className = "flex justify-center font-bold text-4xl mb-4 text-[#252B42]">Login</h3>
      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Email:</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <span className = "text-red-600">This field is required</span>}
      </div>
      <div className = "mb-3">
        <label className="block text-base text-[#252B42] font-semibold mb-2">Password:</label>
        <input
          type="password"
          {...register('password', { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.password && <span className = "text-red-600">This field is required</span>}
      </div>
      <div>
        <label className="text-base text-[#252B42] font-semibold mb-2">
          <input
          className = "mr-2"
          type="checkbox" {...register('rememberMe')} />
          Remember Me
        </label>
      </div>
      <button className = "bg-[#2DC071] py-2.5 w-[10rem] rounded font-semibold text-xl mt-4" type="submit">Login</button>
    </form>
    </section>
  );
};

export default LoginForm;