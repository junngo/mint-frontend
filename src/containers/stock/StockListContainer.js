import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../modules/stock';
import PortfolioViewer from '../../components/main/PortfolioViewer';


const StockListContainer = ({
    stock,
    getPortfolio
}) => {
    useEffect(() => {
        getPortfolio();
    }, [getPortfolio]);

    return (
        <>
            {stock.portfolio && <PortfolioViewer portfolio = {stock.portfolio}/>}
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { stock } = state;

    return {
        stock
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPortfolio: () => {
            dispatch(actionCreators.getPortfolio());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockListContainer);
