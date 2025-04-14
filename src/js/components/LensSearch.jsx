import React from 'react';
import { FaArrowLeft, FaCamera, FaImage } from 'react-icons/fa';
import { MdTranslate, MdSearch, MdSchool } from 'react-icons/md';
import {
  Container,
  Header,
  HeaderButton,
  HeaderGroup,
  SearchContainer,
  SearchOption,
  SearchOptionText,
  SearchOptionIcon,
  SearchGrid,
  SearchOptionTitle,
  SearchOptionSubtext
} from '../styles/LensStyles';
import { Camera, Image, Text } from '@capacitor/core';

const LensSearch = ({ onClose, onLensClick }) => {
  const searchOptions = [
    {
      icon: <FaCamera size={24} />,
      text: 'Search with your camera',
      subtext: 'Take a photo to search',
      onClick: onLensClick
    },
    {
      icon: <FaImage size={24} />,
      text: 'Search any image',
      subtext: 'Choose a photo from your gallery',
      onClick: () => {}
    },
    {
      icon: <MdTranslate size={24} />,
      text: 'Translate text',
      subtext: 'Point camera at text to translate',
      onClick: () => {}
    },
    {
      icon: <MdSearch size={24} />,
      text: 'Search text',
      subtext: 'Point camera at text to search',
      onClick: () => {}
    },
    {
      icon: <MdSchool size={24} />,
      text: 'Solve homework',
      subtext: 'Get help with math & more',
      onClick: () => {}
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderGroup>
          <HeaderButton onClick={onClose} aria-label="Close">
            <FaArrowLeft size={20} />
          </HeaderButton>
        </HeaderGroup>
      </Header>
      
      <SearchContainer>
        <SearchGrid>
          {searchOptions.map((option, index) => (
            <SearchOption 
              key={index} 
              onClick={option.onClick}
              role="button"
              aria-label={option.text}
            >
              <SearchOptionIcon>
                {option.icon}
              </SearchOptionIcon>
              <div>
                <SearchOptionText>
                  <SearchOptionTitle>{option.text}</SearchOptionTitle>
                  <SearchOptionSubtext>{option.subtext}</SearchOptionSubtext>
                </SearchOptionText>
              </div>
            </SearchOption>
          ))}
        </SearchGrid>
      </SearchContainer>
    </Container>
  );
};

export default LensSearch; 
