//@ts-check
import React from "react";
import { FormGroup, Form, Input, InputGroup, Button, InputGroupAddon, } from 'reactstrap';
import { search, saveSearchHistory } from "./redux/actions"
import { connect } from 'react-redux';
import SearchResult from "../SearchResult/SearchResult";
import SearchHistory from "./SearchHistory";
class Search extends React.Component {
    handleClick() {
        this.props.handleSearch(this.props.searchTerm);
        this.props.handleSaveSearchHistory();
    }
    render(){
        return(
            <div className="container" style={{marginTop: '15vh'}}>
                <div className="bg-info clearfix" style={{ padding: '.5rem', color: "white", marginBottom: '5vh' }}>Welcome</div>
                <Form>
                    <FormGroup>
                        <InputGroup>
                            <Input 
                            onChange={(e) =>this.props.handleSearch(e.target.value)} placeholder="Search anything about Acme Co." name="text" />
                            <InputGroupAddon addonType="append">
                            <Button onClick={() =>this.handleClick()}>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup> 
                </Form>
                {this.props.searchTerm ? (
                    null
                ) : (
                    <SearchHistory />
                 )}
                {this.props.searchResult && Object.keys(this.props.searchResult).length > 0 ? (
                    <SearchResult />
                ) : (null)}
            </div>
            
        )
    }

    
}

const mapStateToProps = state => ({
    searchTerm: state.search.search.searchTerm,
    searchResult: state.search.search.searchResult,
    searchHistory: state.search.search.searchHistory,
  });
  
const mapDispatchToProps = dispatch => ({
    handleSearch: (data) => {
        dispatch(search(data));
    },
    handleSaveSearchHistory: () => {
        dispatch(saveSearchHistory());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);