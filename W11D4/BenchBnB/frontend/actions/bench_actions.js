export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

import {fetchBenches} from '../util/bench_api_util'

const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const FetchBenches = () => dispatch => fetchBenches()
    .then(benches => dispatch(receiveBenches(benches)));