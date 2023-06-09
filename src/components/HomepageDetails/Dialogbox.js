import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const MComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [inputValues, setInputValues] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    setIsSmallScreen(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const questions = [
    '1. Name',
    '2. Email',
    '3. Phone Number',
    '4. Is there a specific jewellery store that you would recommend to be listed on our platform?',
    '5. Have you ever saved through jewellery saving plans before',
  ];
  const inputs = ['', '', '', '', ''];

  const openDialog = () => {
    setDialogOpen(true);
    setCurrentInputIndex(0);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setCurrentInputIndex(0);
    const updatedInputValues = {};
    questions.forEach((question, index) => {
      updatedInputValues[question] = inputs[index];
    });
    setInputValues(updatedInputValues);
  };

  const nextInput = () => {
    if (currentInputIndex < inputs.length - 1) {
      setAnimationClass('fade-out');
      setTimeout(() => {
        setAnimationClass('');
        setCurrentInputIndex(currentInputIndex + 1);
      }, 300);
    }
  };

  return (
    <div>
      <button
        style={{
          height: '44px',
          paddingLeft: '65px',
          paddingRight: '65px',
          border: '2px solid black',
          borderRadius: '10px',
          backgroundColor: '#FC762A',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'g-bold',
        }}
        onClick={openDialog}
      >
        Get Access
      </button>
      {dialogOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999',
            
          }}
        >
          <div
            style={{
              height: '430px',
              width: '430px',
              background: '#fff',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ alignItems: 'left', textAlign: 'left', margin: '20px' }}>
              <img style={{ height: isSmallScreen ? '30px' : '40px' }} src="artboard-2-4x-2@4x.png" alt="Logo" />
            </div>
            <h2 style={{ margin: '10px 0', marginTop: '50px', width: '100%', textAlign: 'left', paddingBottom: '20px', fontSize: '17px', fontFamily: 'g-bold' }}>{questions[currentInputIndex]}</h2>
            {currentInputIndex === inputs.length - 1 ? (
              <select
                value={inputs[currentInputIndex]}
                onChange={(e) => {
                  const updatedInputs = [...inputs];
                  updatedInputs[currentInputIndex] = e.target.value;
                  setInputValues(updatedInputs);
                }}
                style={{
                  width: '100%',
                  padding: '5px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                }}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            ) : (
              <TextField style={{ width: '100%' }} id="standard-basic" variant="standard" value={inputs[currentInputIndex]} />
            )}
            <div style={{ margin: '20px 0' }}>
              {currentInputIndex < inputs.length - 1 && (
                <button onClick={nextInput} type="button" className="btn btn-info">
                  Next
                </button>
              )}
            </div>
            {currentInputIndex === inputs.length - 1 && (
              <button onClick={closeDialog} type="button" className="btn btn-success">
                Save
              </button>
            )}
          </div>
        </div>
      )}
      {/* {Object.keys(inputValues).length > 0 && (
        <div>
          <h2>Input Values</h2>
          <ul>
            {Object.entries(inputValues).map(([question, value]) => (
              <li key={question}>
                <strong>{question}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default MComponent;
