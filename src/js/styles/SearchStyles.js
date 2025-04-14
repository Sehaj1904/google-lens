import styled from 'styled-components';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { IoTimeOutline, IoCamera } from 'react-icons/io5';

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

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: #303134;
  border-radius: 24px;
  margin: 12px;
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
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: #e8eaed;
  font-size: 16px;
  outline: none;
  padding: 8px 0;
  
  &::placeholder {
    color: #9aa0a6;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  
  button {
    background: none;
    border: none;
    color: #8ab4f8;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RecentSearches = styled.div`
  padding: 16px;
`;

export const RecentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h2 {
    color: #e8eaed;
    font-size: 16px;
    font-weight: 400;
  }
  
  button {
    color: #9aa0a6;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    padding: 8px;
  }
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 8px;
  cursor: pointer;
  
  &:hover {
    background: rgba(232, 234, 237, 0.08);
    border-radius: 8px;
  }
  
  .icon {
    color: #9aa0a6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .text {
    color: #e8eaed;
    font-size: 16px;
  }
`; 