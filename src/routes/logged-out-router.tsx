import { isLoggedInVar } from '../apollo';

export default function LoggedOutRouter() {

    const onClick = () => {
        isLoggedInVar(true)
    }

  return (
    <div>
      <h3 className='text-red-600 font-extrabold'>ЕСЛИ ЗАЛОГИНЕН</h3>
      <button onClick={onClick} className='border-solid bg-clip-padding'>РАЗЛОГИНИТЬСЯ</button>
    </div>
  );
}
