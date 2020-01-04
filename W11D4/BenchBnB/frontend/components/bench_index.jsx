import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // request benches from your API her
        // console.log(this.props.FetchBenches());
        this.props.FetchBenches();
    }

    render(){
        const benchItems = this.props.benches.map(bench =>(
            <BenchIndexItem key={bench.id} bench={bench}/>
        ));
        console.log("----------------")
        console.log(benchItems)
        console.log("----------------")
        return(
            <div>
                <ul>
                    {benchItems}
                </ul>
            </div>
        );
    }
}
export default BenchIndex;