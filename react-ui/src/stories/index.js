import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../components/card';
import Grid from '../components/grid';
import List from '../components/list';
import Header from '../components/header';
import Footer from '../components/footer';

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

storiesOf('Header-Footer', module)
  .add('with reactbootstrap navbar', () => <Header /> )
  .add('footer', () => <Footer /> )
  .add('combined', () => {
    return(
      <div>
        <Header />
          <table>
          <thead>
          <tr>
          <th>Header Cell 1</th>
          <th>Header Cell 2</th>
          <th>Header Cell 3</th>
          <th>Header Cell 4</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
          <td>Row 1, Cell 4</td>
          </tr>
          <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
          <td>Row 2, Cell 4</td>
          </tr>
          <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
          <td>Row 3, Cell 4</td>
          </tr>
          <tr>
          <td>Row 4, Cell 1</td>
          <td>Row 4, Cell 2</td>
          <td>Row 4, Cell 3</td>
          <td>Row 4, Cell 4</td>
          </tr>
          <tr>
          <td>Row 5, Cell 1</td>
          <td>Row 5, Cell 2</td>
          <td>Row 5, Cell 3</td>
          <td>Row 5, Cell 4</td>
          </tr>
          <tr>
          <td>Row 6, Cell 1</td>
          <td>Row 6, Cell 2</td>
          <td>Row 6, Cell 3</td>
          <td>Row 6, Cell 4</td>
          </tr>
          <tr>
          <td>Row 7, Cell 1</td>
          <td>Row 7, Cell 2</td>
          <td>Row 7, Cell 3</td>
          <td>Row 7, Cell 4</td>
          </tr>
          <tr>
          <td>Row 8, Cell 1</td>
          <td>Row 8, Cell 2</td>
          <td>Row 8, Cell 3</td>
          <td>Row 8, Cell 4</td>
          </tr>
          <tr>
          <td>Row 9, Cell 1</td>
          <td>Row 9, Cell 2</td>
          <td>Row 9, Cell 3</td>
          <td>Row 9, Cell 4</td>
          </tr>
          <tr>
          <td>Row 10, Cell 1</td>
          <td>Row 10, Cell 2</td>
          <td>Row 10, Cell 3</td>
          <td>Row 10, Cell 4</td>
          </tr>
          <tr>
          <td>Row 11, Cell 1</td>
          <td>Row 11, Cell 2</td>
          <td>Row 11, Cell 3</td>
          <td>Row 11, Cell 4</td>
          </tr>
          <tr>
          <td>Row 12, Cell 1</td>
          <td>Row 12, Cell 2</td>
          <td>Row 12, Cell 3</td>
          <td>Row 12, Cell 4</td>
          </tr>
          <tr>
          <td>Row 13, Cell 1</td>
          <td>Row 13, Cell 2</td>
          <td>Row 13, Cell 3</td>
          <td>Row 13, Cell 4</td>
          </tr>
          <tr>
          <td>Row 14, Cell 1</td>
          <td>Row 14, Cell 2</td>
          <td>Row 14, Cell 3</td>
          <td>Row 14, Cell 4</td>
          </tr>
          <tr>
          <td>Row 15, Cell 1</td>
          <td>Row 15, Cell 2</td>
          <td>Row 15, Cell 3</td>
          <td>Row 15, Cell 4</td>
          </tr>
          <tr>
          <td>Row 16, Cell 1</td>
          <td>Row 16, Cell 2</td>
          <td>Row 16, Cell 3</td>
          <td>Row 16, Cell 4</td>
          </tr>
          <tr>
          <td>Row 17, Cell 1</td>
          <td>Row 17, Cell 2</td>
          <td>Row 17, Cell 3</td>
          <td>Row 17, Cell 4</td>
          </tr>
          <tr>
          <td>Row 18, Cell 1</td>
          <td>Row 18, Cell 2</td>
          <td>Row 18, Cell 3</td>
          <td>Row 18, Cell 4</td>
          </tr>
          <tr>
          <td>Row 19, Cell 1</td>
          <td>Row 19, Cell 2</td>
          <td>Row 19, Cell 3</td>
          <td>Row 19, Cell 4</td>
          </tr>
          <tr>
          <td>Row 20, Cell 1</td>
          <td>Row 20, Cell 2</td>
          <td>Row 20, Cell 3</td>
          <td>Row 20, Cell 4</td>
          </tr>
          <tr>
          <td>Row 21, Cell 1</td>
          <td>Row 21, Cell 2</td>
          <td>Row 21, Cell 3</td>
          <td>Row 21, Cell 4</td>
          </tr>
          <tr>
          <td>Row 22, Cell 1</td>
          <td>Row 22, Cell 2</td>
          <td>Row 22, Cell 3</td>
          <td>Row 22, Cell 4</td>
          </tr>
          <tr>
          <td>Row 23, Cell 1</td>
          <td>Row 23, Cell 2</td>
          <td>Row 23, Cell 3</td>
          <td>Row 23, Cell 4</td>
          </tr>
          <tr>
          <td>Row 24, Cell 1</td>
          <td>Row 24, Cell 2</td>
          <td>Row 24, Cell 3</td>
          <td>Row 24, Cell 4</td>
          </tr>
          <tr>
          <td>Row 25, Cell 1</td>
          <td>Row 25, Cell 2</td>
          <td>Row 25, Cell 3</td>
          <td>Row 25, Cell 4</td>
          </tr>
          <tr>
          <td>Row 26, Cell 1</td>
          <td>Row 26, Cell 2</td>
          <td>Row 26, Cell 3</td>
          <td>Row 26, Cell 4</td>
          </tr>
          <tr>
          <td>Row 27, Cell 1</td>
          <td>Row 27, Cell 2</td>
          <td>Row 27, Cell 3</td>
          <td>Row 27, Cell 4</td>
          </tr>
          <tr>
          <td>Row 28, Cell 1</td>
          <td>Row 28, Cell 2</td>
          <td>Row 28, Cell 3</td>
          <td>Row 28, Cell 4</td>
          </tr>
          <tr>
          <td>Row 29, Cell 1</td>
          <td>Row 29, Cell 2</td>
          <td>Row 29, Cell 3</td>
          <td>Row 29, Cell 4</td>
          </tr>
          <tr>
          <td>Row 30, Cell 1</td>
          <td>Row 30, Cell 2</td>
          <td>Row 30, Cell 3</td>
          <td>Row 30, Cell 4</td>
          </tr>
          </tbody>
          </table>
        <Footer />
      </div>
    );
  })
