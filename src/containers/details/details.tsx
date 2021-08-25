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

  const { data, isSuccess } = useFetchCharacterDetail(characterId);

  const navigate = useNavigate();

  return (
    <div className="details__wrapper">
      <div className="details__overlay" />
      <CloseIcon className="details__icon" onClick={() => navigate('/')} />
      <div className="details__inner-wrapper">
        {isSuccess && (
          <div className="details__infos">
            <span>
              <h2 className="details__name">{data?.data[0].name}</h2>
              <p className="details__nickname">{data?.data[0].nickname}</p>
              <p className="details__text">
                Ator: <span>{data?.data[0].portrayed}</span>
              </p>
            </span>
            <img
              src={data?.data[0].img}
              alt="profile-picure"
              className="details__image"
            />
          </div>
        )}
      </div>
    </div>
  );
};
