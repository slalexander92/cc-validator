import React, { useState } from 'react';
import { CCMessage, CardInfo } from '../types/credit-card-types';
import './CreditCardValidator.css';

export default function CreditCardValidator({ handleRequest, message }: {handleRequest: any, message: CCMessage | null}) {
  const [data, setData] = useState<CardInfo>({
    number: '',
    exp: '',
    cvv: '',
  });

  const [isHardModeActive, setIsHardModeActive] = useState<Boolean>(false);

  function onChange(key: string, val: string) {
    setData({
      ...data,
      [key]: val
    });
  }

  const messageClasses = ['cc-message', (message?.type ?? '' )].join(' ');
  const cardMessage = message && (<div className={messageClasses}>{message.text}</div>)

  const rootClasses = ['cc-root', (isHardModeActive ? 'hard-mode' : '')].join(' ');

  return (
    <>
      <div className={rootClasses}>
        <h2 className="cc-title">Credit Card Information</h2>

        <div className="cc-input-wrapper">
          <label htmlFor="number">Card Number:</label>
          <input
            type="text"
            placeholder="Enter card number"
            value={data.number}
            name="number"
            onChange={e => onChange('number', e.target.value)}
            />
        </div>

        <div className="cc-input-wrapper">
          <label htmlFor="number">Expiration Date:</label>
          <input
            type="month"
            placeholder="MM/YY"
            value={data.exp}
            name="exp"
            onChange={e => onChange('exp', e.target.value)}
            />
        </div>

        <div className="cc-input-wrapper">
          <label htmlFor="number">CVV:</label>
          <input
            type="text"
            placeholder="Enter CVV"
            value={data.cvv}
            name="cvv"
            onChange={e => onChange('cvv', e.target.value)}
            maxLength={3}
          />
        </div>

        { cardMessage }

        <button className="cc-submit-button" onClick={() => handleRequest(data)}>
          Validate Card
        </button>
      </div>

      <button className="hard-mode-button" onClick={() => setIsHardModeActive(!isHardModeActive)}>
        {(isHardModeActive ? 'Deactivate' : 'Activate') + ' Hard Mode?'}
      </button>
    </>
  );
};


