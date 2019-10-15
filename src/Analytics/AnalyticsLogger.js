//@ts-check
import ReactGA from 'react-ga';
const ACTION_TYPES_LOGGING_BLACKLIST = ['persist/FLUSH','persist/REHYDRATE','persist/PAUSE','persist/PERSIST', 'persist/PURGE','persist/REGISTER' ]
export const analyticsLogger = () => next => action => {
    if (ACTION_TYPES_LOGGING_BLACKLIST.indexOf(action.type) >= 0){
        return next(action)
    }
    switch (action.type) {
        case "SEARCH":
            ReactGA.event({
                category: "Search",
                action: "User did a search",
            });
            break;
        case "SAVE_SEARCH_HISTORY":
            ReactGA.event({
                category: "Search",
                action: "User saved a search term to history",
            });
            break;
        case "CLEAR_SEARCH_HISOTRY":
            ReactGA.event({
                category: "Search",
                action: "User cleared the search history",
            });
            break;
        default:
            break;
    }
    let result = next(action)
    return result
}