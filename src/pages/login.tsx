export default function Login() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='bg-white w-full max-w-lg py-10 rounded-2xl text-center'>
        <h3 className='font-bold text-3xl text-gray-800'>Log In</h3>
        <form className='flex flex-col mt-5 px-5'>
          <input
            placeholder='E-mail'
            className='mb-3 py-3 bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 px-2 rounded-lg'
          />
          <input
            placeholder='Password'
            className='py-3 bg-gray-100 px-2 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 rounded-lg'
          />
          <button className="py-3 px-5 bg-gray-800 text-white font-medium text-lg mt-3 rounded-lg focus:outline-none hover:opacity-80">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
