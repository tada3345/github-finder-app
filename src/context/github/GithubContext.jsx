import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { createContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/layout/Spinner';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
