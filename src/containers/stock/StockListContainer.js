import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../modules/stock';
import StockChart from "../../components/main/StockChart";


const StockListContainer = ({
    stock,
    getFeed
}) => {
    useEffect(() => {
        getFeed()
    }, [getFeed]);

    return (
        <>
            {stock.stocks && <StockChart stocks = {stock.stocks}/>}
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
        getFeed: () => {
            dispatch(actionCreators.getFeed());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockListContainer);
