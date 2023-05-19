import './SearchBar.scss';
import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function SearchBar() {
  return (
    <TextInput
      placeholder="Введите название вакансии"
      icon={<IconSearch />}
      radius={'md'}
      rightSection={
        <Button radius={'md'} color="indigo" className="test">
          Поиск
        </Button>
      }
      rightSectionWidth={80}
    />
  );
}

export default SearchBar;
