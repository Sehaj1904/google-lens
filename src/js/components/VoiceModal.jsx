import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #202124;
  z-index: 2000;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #e8eaed;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Text = styled.div`
  color: #e8eaed;
  font-size: 24px;
  font-family: 'Google Sans', sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40vh;
  position: relative;
`;

const Dot = styled.div`
  width: ${props => props.isListening ? '16px' : '12px'};
  height: ${props => props.isListening ? '16px' : '12px'};
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${bounce} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const PulseCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(138, 180, 248, 0.2);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SearchButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #2f3033;
  border: none;
  border-radius: 100px;
  color: #9aa0a6;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #35363a;
  }
`;

const RecognizedText = styled.div`
  color: #e8eaed;
  font-size: 20px;
  text-align: center;
  margin-top: 32px;
  padding: 0 24px;
  min-height: 60px;
`;

const VoiceModal = ({ show, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    if (show) {
      initializeVoiceRecognition();
    } else {
      stopListening();
    }
  }, [show]);

  const initializeVoiceRecognition = async () => {
    try {
      const { available } = await SpeechRecognition.available();
      if (available) {
        await SpeechRecognition.requestPermissions();
        startListening();
      }
    } catch (error) {
      console.error('Error initializing speech recognition:', error);
    }
  };

  const startListening = async () => {
    try {
      setIsListening(true);
      setRecognizedText('');

      await SpeechRecognition.start({
        language: 'en-US',
        maxResults: 1,
        prompt: 'Speak now',
        partialResults: true,
        popup: false,
      });

      SpeechRecognition.addListener('partialResults', (data) => {
        const text = data.matches[0];
        setRecognizedText(text);
      });

      SpeechRecognition.addListener('results', (data) => {
        const text = data.matches[0];
        setRecognizedText(text);
        stopListening();
      });
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      await SpeechRecognition.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  };

  const handleClose = async () => {
    await stopListening();
    onClose();
  };

  return (
    <Modal show={show}>
      <Header>
        <BackButton onClick={handleClose}>
          <FaArrowLeft size={20} />
        </BackButton>
        <Text>Speak now</Text>
      </Header>

      <DotsContainer>
        {isListening && <PulseCircle />}
        <Dot color="#4285f4" delay={0} isListening={isListening} /> {/* Blue */}
        <Dot color="#ea4335" delay={0.2} isListening={isListening} /> {/* Red */}
        <Dot color="#fbbc05" delay={0.4} isListening={isListening} /> {/* Yellow */}
        <Dot color="#34a853" delay={0.6} isListening={isListening} /> {/* Green */}
      </DotsContainer>

      <RecognizedText>
        {recognizedText || (isListening ? 'Listening...' : '')}
      </RecognizedText>

      <SearchButton onClick={startListening}>
        Search a song
      </SearchButton>
    </Modal>
  );
};

export default VoiceModal; 