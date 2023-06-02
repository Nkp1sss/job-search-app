import './Filters.scss';

import { IconChevronDown } from '@tabler/icons-react';
import { Image, Text, Select, Input, Button, Loader } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetCataloguesQuery } from '../../redux/slices/SuperjobAPI';
import {
  changeCatalogKey,
  changeSalaryFrom,
  changeSalaryTo,
  changeSearchVacancy,
} from '../../redux/slices/options';
import {
  changeCatalogKeyInput,
  changeSalaryToInput,
  changeSalaryFromInput,
} from '../../redux/slices/inputs';

import { CatalogType, SelectType } from '../../types';
import closeBtn from '../../assets/images/close-btn.png';

function Filters() {
  const catalogValue = useAppSelector((store) => store.inputs.catalogKey);
  const valueFrom = useAppSelector((store) => store.inputs.payment_from);
  const valueTo = useAppSelector((store) => store.inputs.payment_to);
  const searchInputValue = useAppSelector((store) => store.inputs.searchInputValue);
  const dispatch = useAppDispatch();

  const { data: catalogues, isLoading } = useGetCataloguesQuery('');
  let cataloguesArray: SelectType[] = [];
  if (catalogues) {
    cataloguesArray = catalogues.map((catalog: CatalogType) => ({
      value: String(catalog.key),
      label: catalog.title_trimmed,
    }));
  }

  const onResetClick = () => {
    dispatch(changeCatalogKeyInput(''));
    dispatch(changeSalaryFromInput(''));
    dispatch(changeSalaryToInput(''));

    dispatch(changeCatalogKey(''));
    dispatch(changeSalaryFrom(''));
    dispatch(changeSalaryTo(''));
  };

  const onApplyClick = () => {
    if (catalogValue) {
      dispatch(changeCatalogKey(catalogValue));
    }
    dispatch(changeSalaryFrom(valueFrom));
    dispatch(changeSalaryTo(valueTo));

    if (searchInputValue) {
      dispatch(changeSearchVacancy(searchInputValue));
    }
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
          <Text className="catalogues-title" size={17} fw={700} ff={'inherit'}>
            Отрасль
          </Text>
          <Select
            placeholder="Выберите отрасль"
            value={catalogValue}
            onChange={(value: string) => dispatch(changeCatalogKeyInput(value))}
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
          <Text className="salary-title" fw={500} size={16} ff={'inherit'}>
            Оклад
          </Text>
          <Input
            placeholder="От"
            className="salary-from"
            value={valueFrom}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeSalaryFromInput(e.target.value.replace(/\D/g, '')))
            }
            pattern="\d"
          />
          <Input
            placeholder="До"
            className="salary-to"
            value={valueTo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(changeSalaryToInput(e.target.value.replace(/\D/g, '')))
            }
          />
          <Button className="button btn-apply" color="indigo" radius="md" onClick={onApplyClick}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
