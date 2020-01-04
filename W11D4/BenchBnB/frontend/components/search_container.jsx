import Search from "./search";
import { connect } from 'react-redux';
import { FetchBenches } from '../actions/bench_actions'


const mapStateToProps = (state) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mapDispatchToProps = dispatch => ({
    FetchBenches: () => dispatch(FetchBenches())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);