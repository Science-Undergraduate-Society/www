import { useState, useEffect } from "react";
import styled from "styled-components";
import { executiveInfo } from "@/utility/electedExecutives";
import Navbar from "@/components/Navbar";
import { Modal } from "@/components/index-components/Modal";
import Footer from "@/components/Footer";

const Background = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  filter: ${({ modalClose }) => (modalClose ? "none" : "blur(5px)")};
`;

const Content = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 10%;
  padding-right: 10%;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const Header = styled.div`
  font-size: 37px;
  font-weight: bold;
  color: #001961;
`;

const SubHeader = styled.div`
  font-size: 20px;
  color: #001961;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ExecutiveContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ExecutiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 350px;
  gap: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const ExecutiveTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExecutiveTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ExecutiveName = styled.div`
  font-size: 16px;
`;

const ExecutiveImage = styled.img`
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

export const Executive = ({ name, role, imagePath, email, description }) => {
  const [modalClose, setModalClose] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalClose(true);
      }
    };

    if (!modalClose) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalClose]);

  const setCloseModal = () => {
    setModalClose(!modalClose);
  };

  return (
    <>
      <Modal
        modalClose={modalClose}
        setCloseModal={setCloseModal}
        name={name}
        role={role}
        imagePath={imagePath}
        email={email}
        description={description}
      />
      <ExecutiveCard onClick={setCloseModal}>
        <ExecutiveImage src={imagePath} />
        <ExecutiveTextContainer>
          <ExecutiveTitle>{role}</ExecutiveTitle>
          <ExecutiveName>{name}</ExecutiveName>
        </ExecutiveTextContainer>
      </ExecutiveCard>
    </>
  );
};

export default function Executives() {
  const [modalClose, setModalClose] = useState(true);

  return (
    <>
      <Navbar />
      <Background modalClose={modalClose}>
        <Content>
          <HeaderContainer>
            <Header>Meet the Executives</Header>
            <SubHeader>
              Here you can find the contact information of each executive to be
              able to contact them. As well, office hours are held for each
              executive, and you can attend them at Abdul Ladha. 
            </SubHeader>
          </HeaderContainer>
          <ExecutiveContainer>
            {executiveInfo.map((executive) => (
              <Executive
                key={executive.name}
                name={executive.name}
                role={executive.role}
                email={executive.email}
                description={executive.description}
                imagePath={executive.imagePath}
                modalClose={modalClose}
                setModalClose={setModalClose}
              />
            ))}
          </ExecutiveContainer>
        </Content>
        <Footer color="#333333" background="transparent" />
      </Background>
    </>
  );
}