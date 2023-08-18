import React, { useState } from 'react';
import CreditCardValidator from './components/CreditCardValidator';
import './App.css';
import requestHandler from './services/request-handler';
import { CCMessage } from './types/credit-card-types';

function App() {
  const [message, setMessage] = useState<CCMessage | null>(null)

  function resetMessage() {
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  }

  function handleRequest(data: any) {
    return requestHandler('POST', '/cc-validate', data)
      .then(response => {
        setMessage({
          type: 'success',
          text: response.message,
        });
      })
      .catch(error => {
        setMessage({
          type: 'error',
          text: error.message,
        });
      })
      .finally(() => {
        resetMessage();
      })
  }

  return (
    <div className="layout">
      <CreditCardValidator
        message={message}
        handleRequest={(data: Promise<any>) => handleRequest(data)}
      />
    </div>
  );
}

export default App;
