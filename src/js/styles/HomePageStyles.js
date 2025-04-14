import styled from 'styled-components';
import { FaFlask } from 'react-icons/fa';

export const Container = styled.div`
  padding: 16px 16px 80px;
  display: flex;
  flex-direction: column;
  background: #202124;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Logo = styled(FaFlask)`
  color: #8ab4f8;
  font-size: 24px;
`;

export const SearchBarContainer = styled.div`
  background: #303134;
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin: 0 12px;
  flex: 1;
  max-width: 200px;
  position: relative;
  height: 44px;

  > img {
    width: 44px;
    height: 44px;
    padding: 10px;
    border-left: 1px solid #3c4043;
  }
`;

export const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  background: #303134;
  border-radius: 100px;
  height: 100%;

  img {
    width: 80px;
    height: 28px;
    object-fit: contain;
  }
`;

export const GeminiIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  background: #303134;
  border-radius: 0 100px 100px 0;
  border-left: 1px solid #3c4043;
  color: #8ab4f8;
`;

export const GoogleText = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #8ab4f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #202124;
  font-weight: 500;
`;

export const GoogleLogo = styled.div`
  color: white;
  font-size: 32px;
  text-align: center;
  margin: 32px 0;
  font-family: 'Product Sans', Arial, sans-serif;
`;

export const MainSearchBar = styled.div`
  background: #303134;
  border-radius: 28px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 92%;
  margin-bottom: 24px;
  height: 56px;
`;

export const SearchInput = styled.div`
  color: #9aa0a6;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;

  span {
    color: #9aa0a6;
    font-size: 16px;
  }

  svg {
    color: #9aa0a6;
    font-size: 22px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    font-size: 24px;
  }
`;

export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 24px 0;
  padding: 0 12px;
`;

export const ActionButton = styled.button`
  background: ${props => {
    switch (props.color) {
      case '#fcc934': // Yellow/Gold
        return 'rgba(251, 188, 4, 0.1)';
      case '#8ab4f8': // Blue
        return 'rgba(138, 180, 248, 0.1)';
      case '#34a853': // Green
        return 'rgba(52, 168, 83, 0.1)';
      case '#ea4335': // Red
        return 'rgba(234, 67, 53, 0.1)';
      default:
        return '#303134';
    }
  }};
  border-radius: 32px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || '#fff'};
  border: none;
  cursor: pointer;
  width: 100%;
  height: 52px;
  
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
  
  &:hover {
    background: ${props => {
      switch (props.color) {
        case '#fcc934':
          return 'rgba(251, 188, 4, 0.15)';
        case '#8ab4f8':
          return 'rgba(138, 180, 248, 0.15)';
        case '#34a853':
          return 'rgba(52, 168, 83, 0.15)';
        case '#ea4335':
          return 'rgba(234, 67, 53, 0.15)';
        default:
          return '#3c4043';
      }
    }};
  }
`;

export const InfoCards = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 12px;
  margin-bottom: 32px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InfoCard = styled.div`
  background: transparent;
  border-radius: 16px;
  padding: 15px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 1px solid #3c4043;
  min-height: 80px;
  min-width: 180px;
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    color: #e8eaed;
    font-size: 16px;
    font-weight: 400;
  }

  .value {
    color: #e8eaed;
    font-size: 34px;
    font-weight: 400;
    line-height: 1;
    margin: 4px 0;
  }

  .subtitle {
    color: #e8eaed;
    font-size: 16px;
    font-weight: 400;
  }

  .icon {
    position: absolute;
    bottom: 22px;
    right: 20px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .moon-icon {
    color: #adc2ff;
    font-size: 24px;
  }

  .air-icon {
    background: #fef344;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
`;

export const NewsCard = styled.div`
  background: #303134;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 12px;
  
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  
  h3 {
    padding: 16px 20px;
    margin: 0;
    color: #e8eaed;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    font-family: 'Google Sans', sans-serif;
  }
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #303134;
  display: flex;
  justify-content: space-around;
  padding: 16px 24px;
  border-top: 1px solid #3c4043;
  z-index: 1000;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#8ab4f8' : 'rgba(154, 160, 166, 0.8)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  
  svg {
    font-size: 24px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 33, 36, 0.6);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  background: #303134;
  width: 360px;
  margin-top: 20px;
  border-radius: 24px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;

  .close {
    color: #e8eaed;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    font-size: 24px;
  }

  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const MenuItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #e8eaed;
  font-size: 14px;
  font-family: 'Google Sans', sans-serif;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: rgba(232, 234, 237, 0.08);
  }

  svg {
    font-size: 20px;
  }

  .status {
    margin-left: auto;
    color: #9aa0a6;
  }
`;

export const AccountButton = styled.button`
  background: rgba(232, 234, 237, 0.08);
  border: none;
  padding: 12px 24px;
  border-radius: 100px;
  color: #8ab4f8;
  font-size: 14px;
  margin: 8px 20px;
  width: calc(100% - 40px);
  cursor: pointer;
`;

export const Divider = styled.div`
  height: 1px;
  background: #3c4043;
  margin: 8px 0;
`;

export const ModalFooter = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: 24px;
  color: #8ab4f8;
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`; 