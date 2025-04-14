import React, { useState } from 'react';
import { FaSearch, FaMicrophone, FaHome, FaBell, FaMoon } from 'react-icons/fa';
import { IoCamera } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import { BsGrid3X3 } from 'react-icons/bs';
import SearchModal from './components/SearchModal';
import VoiceModal from './components/VoiceModal';
import LensModal from './components/LensModal';
import {
  Container,
  TopBar,
  Logo,
  SearchBarContainer,
  SearchBarContent,
  GoogleText,
  ProfileIcon,
  GoogleLogo,
  MainSearchBar,
  SearchInput,
  ActionButtons,
  QuickActions,
  ActionButton,
  InfoCards,
  InfoCard,
  NewsCard,
  BottomNav,
  NavButton,
  Modal,
  ModalContent,
  ModalHeader,
  MenuItem,
  AccountButton,
  Divider,
  ModalFooter
} from './styles/HomePageStyles';

const HomePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [showLens, setShowLens] = useState(false);

  return (
    <>
      <Container>
        <TopBar>
          <Logo />
          <SearchBarContainer onClick={() => setShowSearch(true)}>
            <SearchBarContent>
              <img src={'/icon/google-color.png'} alt="Google Search" />
              <GoogleText>Search</GoogleText>
            </SearchBarContent>
            <img src={'/icon/gemini.png'} alt="gemini Search" />
          </SearchBarContainer>
          <ProfileIcon onClick={() => setShowModal(true)}>A</ProfileIcon>
        </TopBar>

        <GoogleLogo>Google</GoogleLogo>

        <MainSearchBar>
          <SearchInput onClick={() => setShowSearch(true)}>
            <FaSearch size={22} />
            <span>Search</span>
          </SearchInput>
          <ActionButtons>
            <FaMicrophone 
              size={24} 
              color="#ffffff" 
              onClick={(e) => {
                e.stopPropagation();
                setShowVoice(true);
              }}
              style={{ cursor: 'pointer' }}
            />
            <IoCamera
              size={24} 
              color="#ffffff" 
              onClick={(e) => {
                e.stopPropagation();
                setShowLens(true);
              }}
              style={{ cursor: 'pointer' }}
            />
          </ActionButtons>
        </MainSearchBar>

        <QuickActions>
          <ActionButton color="#fcc934">
            <img src={'/icon/icon1.png'} alt="Image Search" />
          </ActionButton>
          <ActionButton color="#8ab4f8">
            <img src={'/icon/icon2.png'} alt="Translate" />
          </ActionButton>
          <ActionButton color="#34a853">
            <img src={'/icon/icon3.png'} alt="Education" />
          </ActionButton>
          <ActionButton color="#ea4335">
            <img src={'/icon/icon4.png'} alt="Music" />
          </ActionButton>
        </QuickActions>

        <InfoCards>
          <InfoCard>
            <div className="content">
              <span className="title">Gurugram</span>
              <span className="value">30°</span>
            </div>
            <div className="icon">
              <FaMoon className="moon-icon" />
            </div>
          </InfoCard>
          <InfoCard>
            <div className="content">
              <span className="title">Air quality · 170</span>
              <span className="subtitle">Moderate</span>
            </div>
            <div className="icon">
              <div className="air-icon">≋</div>
            </div>
          </InfoCard>
        </InfoCards>

        <NewsCard>
          <img src="/imgs/news.png" alt="News" />
          <h3>This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs toge...</h3>
        </NewsCard>

        <BottomNav>
          <NavButton active>
            <FaHome />
          </NavButton>
          <NavButton>
            <FaMoon />
          </NavButton>
          <NavButton>
            <FaBell />
          </NavButton>
          <NavButton>
            <MdOutlineMenu />
          </NavButton>
        </BottomNav>
      </Container>

      <Modal show={showModal} onClick={() => setShowModal(false)}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalHeader>
            <button className="close" onClick={() => setShowModal(false)}>
              <IoClose />
            </button>
            <div className="center">
              <ProfileIcon>A</ProfileIcon>
              <span style={{ color: '#e8eaed' }}>Google</span>
            </div>
          </ModalHeader>

          <AccountButton>
            Manage your Google Account
          </AccountButton>

          <Divider />

          <MenuItem>
            Turn on Incognito
          </MenuItem>

          <Divider />

          <MenuItem>
            <BiUser />
            Search history
            <span className="status">Saving</span>
          </MenuItem>

          <MenuItem style={{ paddingLeft: 56 }}>
            Delete last 15 mins
          </MenuItem>

          <Divider />

          <MenuItem>
            <BsGrid3X3 />
            Interests
          </MenuItem>

          <MenuItem>
            Passwords
          </MenuItem>

          <MenuItem>
            <BiUser />
            Your profile
          </MenuItem>

          <MenuItem>
            Search personalisation
          </MenuItem>

          <Divider />

          <MenuItem>
            <FiSettings />
            Settings
          </MenuItem>

          <MenuItem>
            <FiHelpCircle />
            Help and feedback
          </MenuItem>

          <Divider />

          <ModalFooter>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <SearchModal 
        show={showSearch}
        onClose={() => setShowSearch(false)}
      />

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

export default HomePage; 
