import ShopNavbar from "@/shop-components/ShopNavbarAlt";
import ShopFooter from "@/shop-components/ShopFooter";
import styled from "styled-components";

// Add responsive styles to key components
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const ThankYouMessage = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const ThankYouText = styled.p`
    font-size: 18px;
    color: #555;
    max-width: 650px;
`;

const BackToShop = styled.div`
    margin-top: 20px;
    font-size: 16px;
    
    a {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
    }
`;

const ThankYouPage = () => {
    return (
        <>
            <ShopNavbar showShopIcon={false} />
            <Content>
                <ThankYouMessage>Thank You for Shopping with Us!</ThankYouMessage>
                <ThankYouText>Your order confirmation and receipt can be found in the email you provided.</ThankYouText>
                <ThankYouText>We appreciate your support and hope to see you again soon.</ThankYouText>
                <BackToShop>
                    <a href="/shop">Continue Shopping</a>
                </BackToShop>
            </Content>
            <ShopFooter />
        </>
    );
};

export default ThankYouPage;