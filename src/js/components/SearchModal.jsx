import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import { IoTimeOutline, IoCamera } from 'react-icons/io5';
import VoiceModal from './VoiceModal';
import LensModal from './LensModal';
import {
  Modal,
  SearchHeader,
  BackButton,
  SearchInput,
  ActionButtons,
  RecentSearches,
  RecentHeader,
  SearchItem
} from '../styles/SearchStyles';

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
