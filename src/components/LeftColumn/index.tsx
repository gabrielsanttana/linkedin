import React from 'react';
import LoadingLeftColumn from '../Shimmer/LoadingLeftColumn';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';
import {Container} from './styles';

const LeftColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingLeftColumn />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
