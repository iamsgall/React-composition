import React, {useState} from 'react';
import Dialog from './Dialog';

export default function SignupDialog() {
  const [login, setLogin] = useState('');

  const handleChange = e => {
    setLogin(e.target.value);
  };

  const handleSignUp = () => {
    alert(`Welcome aboard, ${login}`);
  };

  return (
    <>
      <Dialog
        title='Mars Exploration Program'
        message='How should we refer to you?'
      >
        <input type='text' value={login} onChange={handleChange} />
        <button onClick={handleSignUp}>Sign Me Up!</button>
      </Dialog>
    </>
  );
}
