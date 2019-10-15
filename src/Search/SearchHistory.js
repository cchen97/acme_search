//@ts-check
import ReactGA from 'react-ga';
import React from "react";
import { ListGroupItem, ListGroup, Button  } from 'reactstrap';
import { search, clearSearchHistory } from "./redux/actions"
import { connect } from 'react-redux';
class SearchHistory extends React.Component {
    handleClick(d){
        ReactGA.event({
            category: "SearchHistory",
            action: "User clicked on a search history",
        });
        this.props.handleSearch(d)
    }
    
    renderHistory(d, i){
        return (
            <ListGroupItem key={i} tag="a" href="#" onClick={() => this.handleClick(d)}>{d}</ListGroupItem>
        )
    }

    render(){
        return (
           <div >
                {this.props.searchHistory && this.props.searchHistory.length > 0 ? (
                    <div>
                        <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Search History <Button size="sm" className="btn btn-danger float-right" color="danger" onClick={() => this.props.handleClearSearchHistory()}>Clear</Button></div>
                        <ListGroup>
                            {this.props.searchHistory.map((d, i) => this.renderHistory(d, i))}
                        </ListGroup>
                    </div>
                ) : (null)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchHistory: state.search.search.searchHistory,
  });
  
const mapDispatchToProps = dispatch => ({
    handleSearch: (data) => {
        dispatch(search(data));
    },
    handleClearSearchHistory: () => {
        dispatch(clearSearchHistory());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);