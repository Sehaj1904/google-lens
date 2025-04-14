import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import {
  Modal,
  Header,
  BackButton,
  Text,
  DotsContainer,
  Dot,
  PulseCircle,
  SearchButton,
  RecognizedText
} from '../styles/VoiceStyles';

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
        <Dot color="#4285f4" delay={0} isListening={isListening} /> 
        <Dot color="#ea4335" delay={0.2} isListening={isListening} />
        <Dot color="#fbbc05" delay={0.4} isListening={isListening} /> 
        <Dot color="#34a853" delay={0.6} isListening={isListening} />
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
