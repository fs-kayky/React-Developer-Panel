import { useContext } from 'react';
import { ChildrenJsxType } from '../types/ChildrenTypes';
import { AuthContext } from '../contexts/AuthContext';
import SignIn from '../../modules/auth/signin';

// import { Container } from './styles';

const AuthRoutes = ({ children }: ChildrenJsxType) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <SignIn/>;
  }

  return children;
}

export default AuthRoutes;