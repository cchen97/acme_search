//@ts-check
import React from "react";
import { connect } from 'react-redux';
import Calendar from "./Calendar";
import Contacts from "./Contacts";
import Dropbox from "./DropBox";
import Slack from "./Slack";
import Tweet from "./Tweet";
class SearchResult extends React.Component {
    render(){
        return(
            <div className="container" style={{marginTop: '15vh'}}>
                <div style={{paddingBottom: '3vh'}}>
                    <Calendar data={this.props.searchResult['calendar']} />
                </div>
                <div style={{paddingBottom: '3vh'}}>
                    <Contacts data={this.props.searchResult['contacts']} />
                </div>
                <div style={{paddingBottom: '3vh'}}>
                    <Dropbox data={this.props.searchResult['dropbox']} />
                </div>
                <div style={{paddingBottom: '3vh'}}>
                    <Slack data={this.props.searchResult['slack']} />
                </div>
                <div style={{paddingBottom: '3vh'}}>
                    <Tweet data={this.props.searchResult['tweet']} />
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = state => ({
    searchResult: state.search.search.searchResult,
  });

export default connect(mapStateToProps, null)(SearchResult);