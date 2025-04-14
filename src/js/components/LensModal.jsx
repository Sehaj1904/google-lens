import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaHistory, FaEllipsisV } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { MdTranslate, MdSearch, MdSchool } from 'react-icons/md';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PostSearchModal from './PostSearchModal';

const Modal = styled.div`
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

const Header = styled.div`
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

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HeaderButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.span`
  font-size: 20px;
  font-family: 'Google Sans', sans-serif;
  font-weight: 500;
`;

const CameraView = styled.div`
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

const DemoImage = styled.div`
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

const BottomBar = styled.div`
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

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const GalleryButton = styled.button`
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

const SearchButton = styled.button`
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

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const NavButton = styled.button`
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

const CropActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  z-index: 100;
`;

const CropButton = styled.button`
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

const LensModal = ({ show, onClose }) => {
  const [showPostSearch, setShowPostSearch] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 80,
    height: 45,
    x: 10,
    y: 27.5
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const imageRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const onImageLoad = (image) => {
    imageRef.current = image;
    // Center the initial crop
    const width = 80;
    const height = 45;
    setCrop({
      unit: '%',
      width,
      height,
      x: (100 - width) / 2,
      y: (100 - height) / 2
    });
  };

  const generateCroppedImage = async (crop) => {
    if (!imageRef.current || !crop.width || !crop.height) return;

    const canvas = document.createElement('canvas');
    const image = imageRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        setCroppedImageUrl(url);
        resolve(url);
      }, 'image/jpeg', 1);
    });
  };

  const handleSearch = () => {
    setShowCropper(true);
  };

  const handleCropComplete = async (cropObj) => {
    setCompletedCrop(cropObj);
    if (cropObj.width && cropObj.height) {
      const url = await generateCroppedImage(cropObj);
      if (url) {
        setShowCropper(false);
        setShowPostSearch(true);
      }
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setCroppedImageUrl(null);
  };

  return (
    <>
      <Modal show={show}>
        <Header>
          <HeaderGroup>
            <HeaderButton onClick={onClose}>
              <FaArrowLeft size={20} />
            </HeaderButton>
          </HeaderGroup>
          <HeaderTitle>Google Lens</HeaderTitle>
          <HeaderGroup>
            <BiTime size={20} />
            <FaEllipsisV size={20} />
          </HeaderGroup>
        </Header>

        {showCropper ? (
          <>
            <CameraView>
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={handleCropComplete}
                aspect={16/9}
                minWidth={100}
                minHeight={100}
              >
                <img 
                  src="/assets/imgs/demo.jpg" 
                  alt="Search content"
                  onLoad={(e) => onImageLoad(e.currentTarget)}
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </ReactCrop>
            </CameraView>
            <CropActions>
              <CropButton onClick={handleCropCancel}>Cancel</CropButton>
              <CropButton 
                primary 
                onClick={() => handleCropComplete(completedCrop)}
              >
                Next
              </CropButton>
            </CropActions>
          </>
        ) : (
          <>
            <DemoImage>
              <img src="/assets/imgs/demo.jpg" alt="Demo content" />
            </DemoImage>
            <BottomBar>
              <ActionRow>
                <GalleryButton>
                  <FaHistory size={24} />
                </GalleryButton>
                <SearchButton onClick={handleSearch}>
                  <MdSearch size={32} color="#000" />
                </SearchButton>
                <div style={{ width: 48 }} />
              </ActionRow>

              <BottomNav>
                <NavButton>
                  <MdTranslate size={18} />
                  Translate
                </NavButton>
                <NavButton active>
                  <MdSearch size={18} />
                  Search
                </NavButton>
                <NavButton>
                  <MdSchool size={18} />
                  Homework
                </NavButton>
              </BottomNav>
            </BottomBar>
          </>
        )}
      </Modal>

      <PostSearchModal 
        show={showPostSearch}
        onClose={() => {
          setShowPostSearch(false);
          setCroppedImageUrl(null);
        }}
        searchImage={croppedImageUrl || "/assets/imgs/news.png"}
      />
    </>
  );
};

export default LensModal; 