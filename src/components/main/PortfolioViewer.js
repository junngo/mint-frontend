import styled from 'styled-components';
import Responsive from '../common/Responsive';
import StockChart from './StockChart';

const Container = styled(Responsive)`
`;
const PortfolioViewerBlock = styled.div`
    margin-top: 5rem;
    .title {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
    }
    .description {
        margin-top: 3rem;
    }
`;

const PortfolioViewer = ({ portfolio }) => {
    return (
        <Container>
            <PortfolioViewerBlock>
                <div className='title'>{portfolio.name}</div>
                <div className='description'
                    dangerouslySetInnerHTML={{ __html: portfolio.description }}
                >
                </div>
                <div>
                    {portfolio.rebalancing_period_unit}
                </div>
                <StockChart stocks={portfolio.stocks} />

                {portfolio.stocks.map(stock => 
                    <StockChart stocks={[stock]} />
                )}
            </PortfolioViewerBlock>
        </Container>
    );
};

export default PortfolioViewer;
