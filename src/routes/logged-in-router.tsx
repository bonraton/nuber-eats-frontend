
import { isLoggedInVar } from '../apollo';

export default function LoggedOutRouter() {

    const onClick = () => {
        isLoggedInVar(false)
    }

  return (
    <div>
      <h3 className='text-red-600 font-extrabold'>ЕСЛИ НЕ ЗАЛОГИНЕН</h3>
      <button onClick={onClick} className='border-solid bg-clip-padding'>ЗАЛОГИНИТЬСЯ</button>
    </div>
  );
}
