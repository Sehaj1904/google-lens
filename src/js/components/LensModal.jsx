import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaHistory, FaEllipsisV } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { MdTranslate, MdSearch, MdSchool } from 'react-icons/md';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PostSearchModal from './PostSearchModal';
import {
  Modal,
  Header,
  HeaderGroup,
  HeaderButton,
  HeaderTitle,
  CameraView,
  DemoImage,
  BottomBar,
  ActionRow,
  GalleryButton,
  SearchButton,
  BottomNav,
  NavButton,
  CropActions,
  CropButton
} from '../styles/LensStyles';

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
                  src="/imgs/demo.jpg" 
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
              <img src="/imgs/demo.jpg" alt="Demo content" />
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
