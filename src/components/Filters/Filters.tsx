import './Filters.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { Image, Text, Select, Input, Button, Loader } from '@mantine/core';
import closeBtn from '../../assets/images/close-btn.png';
import { useGetCataloguesQuery } from '../../redux/slices/SuperjobAPI';
import { CatalogType, SelectType } from '../../types';

function Filters() {
  const { data: catalogues, isLoading } = useGetCataloguesQuery('');

  let cataloguesArray: SelectType[] = [{ value: '666', label: 'Loading...' }];
  if (catalogues) {
    cataloguesArray = catalogues.map((catalog: CatalogType) => ({
      value: String(catalog.key),
      label: catalog.title_trimmed,
    }));
  }

  return (
    <div className="filters">
      <div className="filters-header">
        <Text size={20} fw={700} ff={'inherit'}>
          Фильтры
        </Text>
        <div className="filters-header__reset">
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
          <Input placeholder="От" className="salary-from" />
          <Input placeholder="До" className="salary-to" />
          <Button className="button btn-apply" color="indigo" radius="md">
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
