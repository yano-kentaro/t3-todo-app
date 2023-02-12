import { signIn } from 'next-auth/react';

export const Auth = () => {
  return (
    <div>
      <button
        className='rounded bg-blue-600 px-4 py-2 text-white font-bold hover:bg-blue-800'
        onClick={() => signIn('github')}
      >
        GitHub Auth
      </button>
    </div>
  )
}
