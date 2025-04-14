import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaCamera, FaImage, FaMicrophone } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 600px;
  background: #303134;
  border-radius: 24px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  cursor: pointer;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const CircleButton = styled.button`
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

const HiddenInput = styled.input`
  display: none;
`;

const LensSearch = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the selected file here
      console.log('Selected file:', file);
    }
  };

  return (
    <Container>
      <Header>
        <CloseButton onClick={() => navigate('/')}>
          <IoClose size={24} />
        </CloseButton>
        <span>Google Lens</span>
      </Header>

      <SearchContainer>
        <SearchBox onClick={handleImageUpload}>
          <FaImage color="#9aa0a6" />
          <span style={{ color: '#9aa0a6' }}>Search any image</span>
        </SearchBox>

        <ActionButtons>
          <CircleButton>
            <FaCamera size={24} />
          </CircleButton>
          <CircleButton onClick={handleImageUpload}>
            <FaImage size={24} />
          </CircleButton>
          <CircleButton>
            <FaMicrophone size={24} />
          </CircleButton>
        </ActionButtons>

        <HiddenInput
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
        />
      </SearchContainer>
    </Container>
  );
};

export default LensSearch; 
