import './Filters.scss';
import { Image, Text, Select, Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import closeBtn from '../../assets/images/close-btn.png';

function Filters() {
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
        <div className="industry">
          <Text className="industry-title" size={17} fw={700}>
            Отрасль
          </Text>
          <Select
            placeholder="Выберите отрасль"
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
            ]}
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
