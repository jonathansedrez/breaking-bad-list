import React from 'react';
import { RouteComponentProps, useNavigate } from '@reach/router';

import { useFetchCharacterDetail } from './details.service';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './details.styles.scss';
interface IDetails extends RouteComponentProps {
  characterId?: string;
}

export const Details: React.FC<IDetails> = (props: IDetails) => {
  const { characterId = '' } = props;

  const { data, isLoading, isError, isSuccess } =
    useFetchCharacterDetail(characterId);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="details__wrapper">
      <div className="details__overlay" />
      <CloseIcon className="details__icon" onClick={handleGoBack} />
      <div className="details__inner-wrapper">
        {isLoading && <div>CARREGANDO...</div>}
        {isError && <div>Erro</div>}
        {isSuccess && <div>details {JSON.stringify(data?.data, null, 2)}</div>}
      </div>
    </div>
  );
};
