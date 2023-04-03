import { useForm } from 'react-hook-form';
import { isLoggedInVar } from '../apollo';

interface IForm {
  email: string;
  password: string;
}

export default function LoggedOutRouter() {
  const onClick = () => {
    isLoggedInVar(true);
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = () => {
    console.log(watch().email);
  };

  const onInvalid = () => {
    console.log('ERROR');
  };

  console.log(errors);

  return (
    <div>
      <h1>LoggedOut</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            {...register('email', {
              required: 'This is required',
              validate: (email: string) => email.includes('@gmail.com'),
            })}
            placeholder='email'
          />
          {errors.email?.message && (
            <span className='font-bold'>{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            {...register('password', { required: true })}
            placeholder='password'
          />
        </div>
        <button type='submit'>BUTTON</button>
      </form>
    </div>
  );
}
