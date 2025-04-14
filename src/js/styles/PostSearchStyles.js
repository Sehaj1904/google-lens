import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdHome, MdInfo } from 'react-icons/md';

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
`;

export const Header = styled.div`
  padding: 8px 16px;
  background: #303134;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SearchImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SearchText = styled.div`
  color: #e8eaed;
  font-size: 16px;
`;

export const ProfileButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #8ab4f8;
  border: none;
  color: #202124;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #3c4043;
  font-size: 12px;
`;

export const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#e8eaed' : '#9aa0a6'};
  padding: 12px 0;
  font-size: 14px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.active ? '#8ab4f8' : 'transparent'};
    border-radius: 3px 3px 0 0;
  }
`;

export const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9aa0a6;
  font-size: 14px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px;
`;

export const ResultCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: #303134;
`;

export const ResultImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  background-color: #202124;
`;

export const ResultInfo = styled.div`
  padding: 12px;
`;

export const ResultTitle = styled.div`
  color: #e8eaed;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ResultPrice = styled.div`
  color: #9aa0a6;
  font-size: 14px;
  font-weight: 500;
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-top: 1px solid #3c4043;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#e8eaed' : '#9aa0a6'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8eaed;
  font-size: 16px;
`;

export const UsefulnessPrompt = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(32, 33, 36, 0.9);
  border-radius: 100px;
  padding: 12px 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  backdrop-filter: blur(8px);
`;

export const PromptButton = styled.button`
  background: none;
  border: none;
  color: #8ab4f8;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 12px;

  &:hover {
    background: rgba(138, 180, 248, 0.08);
    border-radius: 4px;
  }
`; 