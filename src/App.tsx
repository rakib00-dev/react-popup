import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, alertVisibility] = useState(false);
  return (
    <>
      {alertVisible && <Alert onClick={() => alertVisibility(false)} />}

      <Button
        btnTxt="Button"
        onClick={() => {
          alertVisibility(true);
        }}
      />
    </>
  );
}

export default App;
