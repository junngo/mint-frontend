import styled from 'styled-components';
import Responsive from './Responsive';


const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background-color: #eafef0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        color: #40394A;
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .menu {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className='logo'>MintChoco</div>
                    <div className='menu'></div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
