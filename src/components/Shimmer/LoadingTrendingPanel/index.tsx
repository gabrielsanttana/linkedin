import React from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';
import {Container} from './styles';

const LoadingTrendingPanel: React.FC = () => {
  return (
    <Container>
      <div className="row">
        <Skeleton className="square-skeleton white" />

        <div className="column">
          <Skeleton className="row-skeleton white" />
          <Skeleton className="row-skeleton white" />
        </div>
      </div>

      <div className="row">
        <Skeleton className="square-skeleton white" />

        <div className="column">
          <Skeleton className="row-skeleton white" />
          <Skeleton className="row-skeleton white" />
        </div>
      </div>

      <div className="row">
        <Skeleton className="square-skeleton white" />

        <div className="column">
          <Skeleton className="row-skeleton white" />
          <Skeleton className="row-skeleton white" />
        </div>
      </div>
    </Container>
  );
};

export default LoadingTrendingPanel;
