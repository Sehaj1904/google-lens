import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Capacitor } from '@capacitor/core';
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
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (show) {
      initializeVoiceRecognition();
    } else {
      stopListening();
    }
    return () => {
      stopListening();
    };
  }, [show]);

  const initializeVoiceRecognition = async () => {
    try {
      if (Capacitor.isNativePlatform()) {
        const { available } = await SpeechRecognition.available();
        if (available) {
          await SpeechRecognition.requestPermissions();
          startListening();
        }
      } else {
        // Use Web Speech API for web platform
        if ('webkitSpeechRecognition' in window) {
          recognitionRef.current = new window.webkitSpeechRecognition();
          recognitionRef.current.continuous = true;
          recognitionRef.current.interimResults = true;
          recognitionRef.current.lang = 'en-US';

          recognitionRef.current.onresult = (event) => {
            const transcript = Array.from(event.results)
              .map(result => result[0])
              .map(result => result.transcript)
              .join('');
            setRecognizedText(transcript);
          };

          recognitionRef.current.onend = () => {
            if (isListening) {
              recognitionRef.current.start();
            }
          };

          startListening();
        } else {
          console.error('Speech recognition not supported in this browser');
          onClose();
        }
      }
    } catch (error) {
      console.error('Error initializing speech recognition:', error);
      onClose();
    }
  };

  const startListening = async () => {
    try {
      setIsListening(true);
      setRecognizedText('');

      if (Capacitor.isNativePlatform()) {
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
      } else {
        if (recognitionRef.current) {
          recognitionRef.current.start();
        }
      }
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      if (Capacitor.isNativePlatform()) {
        await SpeechRecognition.stop();
      } else {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      }
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
