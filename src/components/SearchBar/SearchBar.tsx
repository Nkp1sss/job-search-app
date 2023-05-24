import './SearchBar.scss';

import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSearchValue } from '../../redux/slices/options';

function SearchBar() {
  const searchValue = useAppSelector((store) => store.options.searchVacancyName);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(searchValue);

  return (
    <div className="searchbar">
      <TextInput
        placeholder="Введите название вакансии"
        className="searchbar-input"
        icon={<IconSearch />}
        radius={'md'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(changeSearchValue(inputValue));
          }
        }}
      />
      <Button radius={'md'} color="indigo" onClick={() => dispatch(changeSearchValue(inputValue))}>
        Поиск
      </Button>
    </div>
  );
}

export default SearchBar;
