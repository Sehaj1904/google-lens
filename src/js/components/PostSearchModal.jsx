import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdHome, MdInfo } from 'react-icons/md';

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

const Header = styled.div`
  padding: 8px 16px;
  background: #303134;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SearchText = styled.div`
  color: #e8eaed;
  font-size: 16px;
`;

const ProfileButton = styled.button`
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

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

const TabBar = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #3c4043;
  font-size: 12px;
`;

const Tab = styled.button`
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

const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9aa0a6;
  font-size: 14px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px;
`;

const ResultCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: #303134;
`;

const ResultImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  background-color: #202124;
`;

const ResultInfo = styled.div`
  padding: 12px;
`;

const ResultTitle = styled.div`
  color: #e8eaed;
  font-size: 14px;
  margin-bottom: 4px;
`;

const ResultPrice = styled.div`
  color: #9aa0a6;
  font-size: 14px;
  font-weight: 500;
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-top: 1px solid #3c4043;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#e8eaed' : '#9aa0a6'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const LoadingOverlay = styled.div`
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

const UsefulnessPrompt = styled.div`
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

const PromptButton = styled.button`
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

const PostSearchModal = ({ show, onClose, searchImage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (show && searchImage) {
      // Simulate API call to get search results
      setIsLoading(true);
      setTimeout(() => {
        setSearchResults([
          {
            id: 1,
            image: searchImage,
            title: "Amazon.com: GuliriFei Women's Two Piece...",
            price: "See exact matches",
            source: "Amazon.com"
          },
          {
            id: 2,
            image: searchImage,
            title: "Buy Trendyol Striped Cotton Top - Tops for...",
            price: "₹659*",
            source: "Myntra"
          }
        ]);
        setIsLoading(false);
        // Show usefulness prompt after results load
        setTimeout(() => setShowPrompt(true), 2000);
      }, 1500);
    } else {
      setShowPrompt(false);
    }
  }, [show, searchImage]);

  return (
    <Modal show={show}>
      <Header>
        <FaArrowLeft size={20} color="#e8eaed" onClick={onClose} style={{ cursor: 'pointer' }} />
        <SearchBar>
          <SearchImage image={searchImage} />
          <SearchText>Add to search</SearchText>
        </SearchBar>
        <ProfileButton>A</ProfileButton>
      </Header>

      <TabBar>
        <Tab active>All</Tab>
        <Tab>Products</Tab>
        <Tab>Visual matches</Tab>
        <Tab>About this image</Tab>
      </TabBar>

      <Content>
        <InfoBanner>
          <IoInformationCircleOutline size={18} />
          Results for people are limited
        </InfoBanner>

        <ResultsGrid>
          {searchResults.map(result => (
            <ResultCard key={result.id}>
              <ResultImage src={result.image} alt={result.title} />
              <ResultInfo>
                <ResultTitle>{result.title}</ResultTitle>
                <ResultPrice>{result.price}</ResultPrice>
              </ResultInfo>
            </ResultCard>
          ))}
        </ResultsGrid>
      </Content>

      {isLoading && (
        <LoadingOverlay>
          Searching...
        </LoadingOverlay>
      )}

      {showPrompt && (
        <UsefulnessPrompt>
          <span style={{ color: '#e8eaed' }}>Are these results useful?</span>
          <PromptButton onClick={() => setShowPrompt(false)}>Yes</PromptButton>
          <PromptButton onClick={() => setShowPrompt(false)}>No</PromptButton>
          <PromptButton onClick={() => setShowPrompt(false)}>✕</PromptButton>
        </UsefulnessPrompt>
      )}

      <BottomNav>
        <NavButton>
          <FaArrowLeft size={20} />
        </NavButton>
        <NavButton>
          <FaArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
        </NavButton>
        <NavButton active>
          <MdHome size={24} />
        </NavButton>
        <NavButton>
          <MdInfo size={24} />
        </NavButton>
      </BottomNav>
    </Modal>
  );
};

export default PostSearchModal; 