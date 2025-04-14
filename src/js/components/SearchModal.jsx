import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { IoTimeOutline, IoCamera } from 'react-icons/io5';
import VoiceModal from './VoiceModal';
import LensModal from './LensModal';

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
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: #303134;
  border-radius: 24px;
  margin: 12px;
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
`;

const SearchInput = styled.input`
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

const ActionButtons = styled.div`
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

const RecentSearches = styled.div`
  padding: 16px;
`;

const RecentHeader = styled.div`
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

const SearchItem = styled.div`
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

const recentSearches = [
  'sleeveless gilet jacket men india',
  'sequins skirt less than 2000',
  'cut out bodysuit india',
  'floral crop top',
  'black leather skirt with button',
  'neon shirt',
  'oversized women\'s leather jacket india'
];

const SearchModal = ({ show, onClose }) => {
  const [showVoice, setShowVoice] = useState(false);
  const [showLens, setShowLens] = useState(false);

  const handleVoiceClick = (e) => {
    e.stopPropagation();
    setShowVoice(true);
  };

  const handleLensClick = (e) => {
    e.stopPropagation();
    setShowLens(true);
  };

  return (
    <>
      <Modal show={show}>
        <SearchHeader>
          <BackButton onClick={onClose}>
            <FaArrowLeft color="#ffffff" size={20} />
          </BackButton>
          <SearchInput 
            autoFocus
            placeholder="Search or type URL"
          />
          <ActionButtons>
            <button onClick={handleVoiceClick}>
              <FaMicrophone color="#ffffff" size={20} />
            </button>
            <button onClick={handleLensClick}>
              <IoCamera color="#ffffff" size={20} />
            </button>
          </ActionButtons>
        </SearchHeader>

        <RecentSearches>
          <RecentHeader>
            <h2>Recent searches</h2>
            <button>MANAGE HISTORY</button>
          </RecentHeader>

          {recentSearches.map((search, index) => (
            <SearchItem key={index}>
              <div className="icon">
                <IoTimeOutline size={20} />
              </div>
              <div className="text">{search}</div>
            </SearchItem>
          ))}
        </RecentSearches>
      </Modal>

      <VoiceModal 
        show={showVoice}
        onClose={() => setShowVoice(false)}
      />
      
      <LensModal
        show={showLens}
        onClose={() => setShowLens(false)}
      />
    </>
  );
};

export default SearchModal; 