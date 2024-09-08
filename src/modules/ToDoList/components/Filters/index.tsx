import { Ordering, TodoTypes } from "../../../../__generated__/graphql";

import { Filter } from "../../../../types/Filter";

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  filters: Filter;
};

const Filters = ({ setFilters, filters }: Props) => {
  const onUpdateSort = () => {
    setFilters({
      ...filters,
      orderBy:
        !filters.orderBy || filters.orderBy === Ordering.DateDesc
          ? Ordering.DateAsc
          : Ordering.DateDesc,
    });
  };

  const onUpdateTypes = (key: TodoTypes, value: boolean) => {
    setFilters({
      ...filters,
      types: value
        ? [...filters.types, key]
        : filters.types.filter((e) => e !== key),
    });
  };

  const onSetBusiness = () => {
    setFilters({
      ...filters,
      types: [TodoTypes.Marketing, TodoTypes.Communication],
    });
  };

  const onUpdateIsDone = (isDone?: boolean) => {
    setFilters({
      ...filters,
      isDone,
    });
  };

  const onResetFilter = () => {
    setFilters({
      types: [],
      isDone: undefined,
    });
  };

  return (
    <div>
      <div>Filters :</div>
      <button onClick={onUpdateSort}>
        {filters.orderBy ? `Ordered by ${filters.orderBy}` : "Not Ordered"}
      </button>
      <fieldset>
        <legend>Types:</legend>
        <div>
          <input
            type="checkbox"
            id="RH"
            name="RH"
            checked={filters.types.includes(TodoTypes.Rh)}
            onChange={(e) => onUpdateTypes(TodoTypes.Rh, e.target.checked)}
          />
          <label htmlFor="RH">RH</label>
        </div>
        <div>
          <input
            onChange={(e) => onUpdateTypes(TodoTypes.Tech, e.target.checked)}
            type="checkbox"
            id="Tech"
            name="Tech"
            checked={filters.types.includes(TodoTypes.Tech)}
          />
          <label htmlFor="Tech">Tech</label>
        </div>
        <div>
          <input
            onChange={(e) =>
              onUpdateTypes(TodoTypes.Marketing, e.target.checked)
            }
            type="checkbox"
            id="Marketing"
            name="Marketing"
            checked={filters.types.includes(TodoTypes.Marketing)}
          />
          <label htmlFor="Marketing">Marketing</label>
        </div>
        <div>
          <input
            onChange={(e) =>
              onUpdateTypes(TodoTypes.Communication, e.target.checked)
            }
            type="checkbox"
            id="Communication"
            name="Communication"
            checked={filters.types.includes(TodoTypes.Communication)}
          />
          <label htmlFor="Communication">Communication</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Done state:</legend>
        <div>
          <input
            type="radio"
            id="isDone"
            name="isDone"
            value="isDone"
            checked={filters.isDone === true}
            onChange={() => onUpdateIsDone(true)}
          />
          <label htmlFor="isDone">isDone</label>
        </div>
        <div>
          <input
            type="radio"
            id="isNotDone"
            name="isNotDone"
            value="isNotDone"
            checked={filters.isDone === false}
            onChange={() => onUpdateIsDone(false)}
          />
          <label htmlFor="isNotDone">isNotDone</label>
        </div>
        <div>
          <input
            type="radio"
            id="Any"
            name="Any"
            value="Any"
            checked={filters.isDone === undefined}
            onChange={() => onUpdateIsDone()}
          />
          <label htmlFor="Any">Any</label>
        </div>
      </fieldset>
      <div>
        <button onClick={onSetBusiness}>Business Only</button>
      </div>
      <div>
        <button onClick={onResetFilter}>Reset filters</button>
      </div>
    </div>
  );
};

export default Filters;
