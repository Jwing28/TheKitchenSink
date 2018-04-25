import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Card from '../components/card';
import Grid from '../components/grid';
import List from '../components/list';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('CardComponent', module)
  .add('base', () => <Card />);

const recipes = [{ recipeName: "PB + J", image:"http://via.placeholder.com/202x150" },
  { recipeName: "Tuna Casserole", image:"http://via.placeholder.com/202x150" },
  { recipeName: "Spinach Omelete", image:"http://via.placeholder.com/202x150" },
  { recipeName: "Kale Smoothie", image:"http://via.placeholder.com/202x150" },
  { recipeName: "Chicken Lasagna", image:"http://via.placeholder.com/202x150" },
  { recipeName: "Beef Stew", image:"http://via.placeholder.com/202x150" }
];

storiesOf('Grid', module)
  .add('with CardComponent', () => <Grid recipes={recipes} />);

storiesOf('List', module)
  .add('with ingredients', () => <List ingredients={["pepper","chicken"]} />);
