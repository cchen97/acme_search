//@ts-check
import { 
    SEARCH,
    CLEAR_SEARCH,
    SAVE_SEARCH_HISTORY,
    CLEAR_SEARCH_HISOTRY,
  } from './actions';
import calendarData from '../../data/calendar.json'
import contactsData from '../../data/contacts.json'
import dropboxData from '../../data/dropbox.json'
import slackData from '../..//data/slack.json'
import tweetData from '../../data/tweet.json'

export const createReducer = (initialState, fnMap) => (state, action, ...rest) => {
    const { type } = action;
    const handler = fnMap[type];
    const newState = state || initialState;
  
    return handler ? handler(newState, action, ...rest) : newState;
  };
export default createReducer({
    search: {
        searchTerm: null,
        searchResult:{},
        searchHistory:[],
      },
    }, {
        [SEARCH]: (state, { data }) => {
            var result = [];
            var calendarResult = [];
            for (var i = 0; i < calendarData.calendar.length; i++){
                calendarData.calendar[i].matching_terms.map((d) => {
                    if (data.toLowerCase().trim() === d && calendarResult.indexOf(calendarData.calendar[i]) < 0){
                        calendarResult.push(calendarData.calendar[i])
                    }
                })
            }
            result['calendar'] = calendarResult
            var contactsResult = [];
            for (var i = 0; i < contactsData.contacts.length; i++){
                contactsData.contacts[i].matching_terms.map((d) => {
                    if (data.toLowerCase().trim() === d && contactsResult.indexOf(contactsData.contacts[i]) < 0){
                        contactsResult.push(contactsData.contacts[i])
                    }
                })
            }
            result['contacts'] = contactsResult
            var dropboxResult = [];
            for (var i = 0; i < dropboxData.dropbox.length; i++){
                dropboxData.dropbox[i].matching_terms.map((d) => {
                    if (data.toLowerCase().trim() === d && dropboxResult.indexOf(dropboxData.dropbox[i]) < 0){
                        dropboxResult.push(dropboxData.dropbox[i])
                    }
                })
            }
            result['dropbox'] = dropboxResult
            var slackResult = [];
            for (var i = 0; i < slackData.slack.length; i++){
                slackData.slack[i].matching_terms.map((d) => {
                    if (data.toLowerCase().trim() === d && slackResult.indexOf(slackData.slack[i]) < 0){
                        slackResult.push(slackData.slack[i])
                    }
                })
            }
            result['slack'] =  slackResult
            var tweetResult = [];
            for (var i = 0; i < tweetData.tweet.length; i++){
                tweetData.tweet[i].matching_terms.map((d) => {
                    if (data.toLowerCase().trim() === d && tweetResult.indexOf(tweetData.tweet[i]) < 0){
                        tweetResult.push(tweetData.tweet[i])
                    }
                })
            }
            result['tweet'] =  tweetResult;
            return {
                ...state,
                data,
                search: {
                  ...state.search,
                  searchTerm: data,
                  searchResult: result,
                }
            }
        },
        [CLEAR_SEARCH]: (state) => {
            return {
                ...state,
                search: {
                  ...state.search,
                  searchTerm: null,
                  searchResult: {},
                }
            }
        },
        [SAVE_SEARCH_HISTORY]:(state) => {
            let searchTerm = state.search.searchTerm;
            var newSearchHistory = state.search.searchHistory;
            if (newSearchHistory && newSearchHistory.indexOf(searchTerm.trim().toLowerCase()) < 0){
                newSearchHistory.push(searchTerm.trim().toLowerCase());
            }
            return {
                ...state,
                search: {
                  ...state.search,
                  searchHistory: newSearchHistory
                }
            }
        },
        [CLEAR_SEARCH_HISOTRY]:(state) => {
            return {
                ...state,
                search: {
                  ...state.search,
                  searchHistory: [],
                }
            }
        },
});