import './Filters.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { Image, Text, Select, Input, Button, Loader } from '@mantine/core';
import closeBtn from '../../assets/images/close-btn.png';
import { useGetCataloguesQuery } from '../../redux/slices/SuperjobAPI';
import { CatalogType, SelectType } from '../../types';

import { useState } from 'react';

function Filters() {
  const [catalogValue, setCatalogValue] = useState<string | null>(null);
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  const { data: catalogues, isLoading } = useGetCataloguesQuery('');
  let cataloguesArray: SelectType[] = [];
  if (catalogues) {
    cataloguesArray = catalogues.map((catalog: CatalogType) => ({
      value: String(catalog.key),
      label: catalog.title_trimmed,
    }));
  }

  const onResetClick = () => {
    setCatalogValue(null);
    setValueFrom('');
    setValueTo('');
  };

  return (
    <div className="filters">
      <div className="filters-header">
        <Text size={20} fw={700} ff={'inherit'}>
          Фильтры
        </Text>
        <div className="filters-header__reset" onClick={onResetClick}>
          <Text size={15} fw={400}>
            Сбросить все
          </Text>
          <Image src={closeBtn} alt="close btn" width={16} height={16} />
        </div>
      </div>
      <div className="filters-body">
        <div className="catalogues">
          <Text className="catalogues-title" size={17} fw={700}>
            Отрасль
          </Text>
          <Select
            placeholder="Выберите отрасль"
            value={catalogValue}
            onChange={setCatalogValue}
            rightSection={
              isLoading ? (
                <Loader color="indigo" size="sm" />
              ) : (
                <IconChevronDown size={14} stroke={1.5} />
              )
            }
            data={cataloguesArray}
          />
        </div>
        <div className="salary">
          <Text className="salary-title" fw={500} size={16}>
            Оклад
          </Text>
          <Input
            placeholder="От"
            className="salary-from"
            value={valueFrom}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValueFrom(e.target.value.replace(/\D/g, ''))
            }
            pattern="\d"
          />
          <Input
            placeholder="До"
            className="salary-to"
            value={valueTo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValueTo(e.target.value.replace(/\D/g, ''))
            }
          />
          <Button className="button btn-apply" color="indigo" radius="md">
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
