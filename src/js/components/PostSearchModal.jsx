import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdHome, MdInfo } from 'react-icons/md';
import {
  Modal,
  Header,
  SearchBar,
  SearchImage,
  SearchText,
  ProfileButton,
  Content,
  TabBar,
  Tab,
  InfoBanner,
  ResultsGrid,
  ResultCard,
  ResultImage,
  ResultInfo,
  ResultTitle,
  ResultPrice,
  BottomNav,
  NavButton,
  LoadingOverlay,
  UsefulnessPrompt,
  PromptButton
} from '../styles/PostSearchStyles';

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
