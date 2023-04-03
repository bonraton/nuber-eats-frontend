import { gql, useQuery } from '@apollo/client';
import '../dist/output.css';
import client from './apollo';

function App() {
  const LOGGED_IN = gql`
    query isLoggedIn {
      loggedIn @client
    }
  `;

  const {data} = useQuery(LOGGED_IN);
  console.log(data);

  return (
    <div className='text-red-600'>
      App
      <p className=''>oleg</p>
    </div>
  );
}

export default App;
