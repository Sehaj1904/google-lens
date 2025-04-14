import styled, { keyframes } from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const Modal = styled.div`
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

export const Header = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const BackButton = styled.button`
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

export const Text = styled.div`
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

export const DotsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40vh;
  position: relative;
`;

export const Dot = styled.div`
  width: ${props => props.isListening ? '16px' : '12px'};
  height: ${props => props.isListening ? '16px' : '12px'};
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${bounce} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const PulseCircle = styled.div`
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

export const SearchButton = styled.button`
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

export const RecognizedText = styled.div`
  color: #e8eaed;
  font-size: 20px;
  text-align: center;
  margin-top: 32px;
  padding: 0 24px;
  min-height: 60px;
`; 