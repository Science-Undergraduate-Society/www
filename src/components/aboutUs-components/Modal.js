import { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ModalContainer = styled.div`
  display: ${(props) => (props.modalclose ? "none" : "flex")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 1000px;
  max-height: 90vh;
  border-radius: 20px;
  z-index: 1005;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 50px #ccc;

  @media only screen and (max-width: 1024px) {
    width: 900px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    box-shadow: none;
  }
`;

const ModalContentContainer = styled.div`
  display: flex;
  padding: 100px;
  gap: 30px;
  overflow-y: auto;
  max-height: 90vh;
  width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 40px;
    flex-direction: column;
  }
`;

const Description = styled.div`
  font-size: 18px;
  white-space: pre-line;
  overflow-y: auto;
  flex: 1;

  @media only screen and (max-width: 1024px) {
    overflow-y: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
  }
`;

const ExecutiveCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  flex-shrink: 0;
  min-width: 250px;
`;

const StyledFaTimes = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  color: #333;

  &:hover {
    cursor: pointer;
    color: #555;
  }
`;

const StyledCiMail = styled(CiMail)`
  &:hover {
    cursor: pointer;
    color: #555;
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

const OfficeHoursContainer = styled.div`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`;

const ModalLink = styled.a`
  color: #001961;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Executive = ({ name, role, imagePath, email, officeHours, link }) => {
  return (
    <ExecutiveCard>
      <ExecutiveImage src={imagePath} />
      <ExecutiveTextContainer>
        <ExecutiveTitle>{role}</ExecutiveTitle>
        <ExecutiveName>{name}</ExecutiveName>
      </ExecutiveTextContainer>
      {email && (
        <StyledCiMail
          size={30}
          onClick={() => {
            window.open(
              "mailto:" + email + "?subject=Subject&body=Body%20goes%20here"
            );
          }}
        />
      )}
      {officeHours && (
        <OfficeHoursContainer>
          <strong>Office Hours:</strong> {officeHours}
          {link && (
            <>
              <br />
              <ModalLink href={link} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </ModalLink>
            </>
          )}
        </OfficeHoursContainer>
      )}
    </ExecutiveCard>
  );
};

const Modal = ({
  modalClose,
  setCloseModal,
  name,
  role,
  email,
  imagePath,
  description,
  officeHours,
  link
}) => {
  return (
    <ModalContainer modalclose={modalClose}>
      <StyledFaTimes size={40} onClick={setCloseModal} />
      <ModalContentContainer>
        <Executive
          name={name}
          role={role}
          email={email}
          imagePath={imagePath}
          officeHours={officeHours}
          link={link}
        />
        <Description>{description}</Description>
      </ModalContentContainer>
    </ModalContainer>
  );
};

export { Modal };
