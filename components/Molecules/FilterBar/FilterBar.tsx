import { useCollectionParamsAnime } from '@/hooks/services/Anime/useCollectionParamsAnime';
import { AnimeCollectionParamsType } from '@/utils/types/AnimeTypes.type';
import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import Input from '../../Atomes/Inputs/Input';
import Select from '../../Atomes/Select/Select';
import FormItem from '../FormItem/FormItem';

export interface FilterBarProps {
  paramsState: AnimeCollectionParamsType;
  setParamsRequest: React.Dispatch<SetStateAction<AnimeCollectionParamsType>>;
  setParamsState: React.Dispatch<SetStateAction<AnimeCollectionParamsType>>;
  resetData: () => void;
  paramsRequest: AnimeCollectionParamsType;
}

const ContainerFilter = styled.div<FilterBarProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const FilterBar: React.FC<FilterBarProps> = ({
  setParamsRequest,
  paramsState,
  setParamsState,
  resetData,
  paramsRequest,
}) => {
  const commonProps = { setParamsRequest, setParamsState, paramsState, resetData, paramsRequest };

  const { data: genres } = useCollectionParamsAnime('genres');
  const { data: studios } = useCollectionParamsAnime('studios');
  const { data: producers } = useCollectionParamsAnime('producers');
  const { data: licensors } = useCollectionParamsAnime('licensors');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if ((paramsState.search && paramsState.search.length > 0) || paramsRequest.search) {
        setParamsRequest(paramsState);
        resetData();
      } else {
        const { search, ...updatedParamsState } = paramsState;
        setParamsState(updatedParamsState);
      }
    }
  };

  const handleChangeSelect = (paramKey: string, value: string) => {
    let updatedParamsState: AnimeCollectionParamsType = { ...paramsState };

    if (value !== '0') {
      updatedParamsState[paramKey] = Number(value);
    } else {
      delete updatedParamsState[paramKey];
    }

    setParamsState(updatedParamsState);
    setParamsRequest(updatedParamsState);
    resetData();
  };

  const handleOnChangeSearch = (value: string) => {
    setParamsState({ ...paramsState, search: value });
  };

  return (
    <ContainerFilter {...commonProps}>
      <FormItem width={'20%'} label={'Search'} name={'search'}>
        <Input
          name={'search'}
          type={'text'}
          placeholder={'Search'}
          onKeyDown={handleKeyDown}
          onChange={(e) => handleOnChangeSearch(e.target.value)}
        />
      </FormItem>
      <FormItem width={'20%'} label={'Genre'} name={'genre'}>
        <Select
          name={'genre'}
          onChange={(e) => handleChangeSelect('idGenres', e.target.value)}
          label={'Genres'}
          data={genres || null}
          value={paramsState.idGenres}
        />
      </FormItem>
      <FormItem width={'20%'} label={'Studio'} name={'studio'}>
        <Select
          name={'studio'}
          onChange={(e) => handleChangeSelect('idStudios', e.target.value)}
          label={'Studios'}
          data={studios || null}
          value={paramsState.idStudios}
        />
      </FormItem>
      <FormItem width={'20%'} label={'Producteur'} name={'producer'}>
        <Select
          name={'producer'}
          onChange={(e) => handleChangeSelect('idProducers', e.target.value)}
          label={'Producteur'}
          data={producers || null}
          value={paramsState.idProducers}
        />
      </FormItem>
      <FormItem width={'20%'} label={'Licence'} name={'licence'}>
        <Select
          name={'licence'}
          onChange={(e) => handleChangeSelect('licensors', e.target.value)}
          label={'Licence'}
          data={licensors || null}
          value={paramsState.idLicensors}
        />
      </FormItem>
    </ContainerFilter>
  );
};

export default FilterBar;
