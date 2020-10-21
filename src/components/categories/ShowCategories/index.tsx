import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Category } from './styles';

type Category = {
  id: string;
  name: string;
  slug: string;
};

const ShowCategories: React.FC<{ categories: Category[] }> = ({
  categories,
}) => (
  <div style={{ display: 'flex' }}>
    {categories && categories.length > 0 ? (
      <>
        {categories.map((category) => (
          <Category key={category.id}>
            <Link to={`/library?category=${category.id}`}>{category.name}</Link>
          </Category>
        ))}
      </>
    ) : (
      <p style={{ padding: 8 }}>
        <FormattedMessage id="components.categories.none" />
      </p>
    )}
  </div>
);

export default ShowCategories;
