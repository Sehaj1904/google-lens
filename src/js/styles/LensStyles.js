import styled from 'styled-components';
import { FaArrowLeft, FaHistory, FaEllipsisV, FaCamera, FaImage, FaMicrophone } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { MdTranslate, MdSearch, MdSchool } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

// LensModal Styles
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 2000;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 10;
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  font-family: 'Google Sans', sans-serif;
  font-weight: 500;
`;

export const CameraView = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;

  .ReactCrop {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DemoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const GalleryButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const SearchButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const NavButton = styled.button`
  background: ${props => props.active ? '#4285f4' : 'rgba(0,0,0,0.6)'};
  border: none;
  border-radius: 100px;
  color: ${props => props.active ? 'white' : '#9aa0a6'};
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(8px);
`;

export const CropActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  z-index: 100;
`;

export const CropButton = styled.button`
  background: ${props => props.primary ? '#4285f4' : 'rgba(0,0,0,0.6)'};
  border: none;
  border-radius: 100px;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// LensSearch Styles
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  padding: 16px;
  flex: 1;
  overflow-y: auto;
`;

export const SearchGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SearchOption = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background: #f1f3f4;
  }
`;

export const SearchOptionIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f1f3f4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  flex-shrink: 0;
`;

export const SearchOptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SearchOptionTitle = styled.span`
  font-size: 16px;
  color: #202124;
  margin: 0;
`;

export const SearchOptionSubtext = styled.span`
  font-size: 14px;
  color: #5f6368;
  margin: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const CircleButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #303134;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: #3c4043;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`; 
