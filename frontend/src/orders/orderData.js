import Meatballs from './../images/Meatballs.jpg';
import American from './../images/American.png';
import Avacado from './../images/Avacado.jpg';
import Lobster from './../images/Lobster.jpg';
import Cheddar from './../images/Cheddar.png';
import Colby from './../images/Colby .jpg';
import Bacon from './../images/Bacon.jpg';
import thin from './../images/thin.jpg';
import Beef from './../images/Beef.jpg';
import deep from './../images/deep.jpg';
import feta from './../images/Feta.jpg';
import BBQ from './../images/BBQ.jpg';
import cal from './../images/cal.jpg';
import Ham from './../images/Ham.jpg';
import mashed from './../images/Mashed.jpg';
import blue from './../images/Bluecheese.jpg';
import hand from './../images/Hand.jpg';
import Pepperoni from './../images/Pepperoni.jpg';
import Sausage from './../images/Sausage.jpg';
import Turkey from './../images/Turkey.jpg';
import Pepperjack from './../images/Pepperjack.jpg';
import Smoked from './../images/Smoked.jpg';
import Mozzarella from './../images/Mozzarella.jpg';
import CherryTomatoes from './../images/CherryTomatoes.jpg';
import GreenPeppers from './../images/GreenPeppers.jpg';
import Mushrooms from './../images/Mushrooms.jpg';
import Onions from './../images/onions.jpg';
import Olives from './../images/Olives.jpg';
import redbeans from './../images/Redbeans.png';
import redpeppers from './../images/Redpeppers.jpg';
import roasted from './../images/roatedgarlic.jpg';
import Spinach from './../images/Spinach.jpg';
import Zucchini from './../images/Zucchini.jpg';
import Sweetcorn from './../images/Sweetcorn.jpeg';
import Pickles from './../images/Pickles.jpg';
import Pinapple from './../images/pinapple.jpg';
import Mac from './../images/Mac.jpg';
import Shrimp from './../images/Shrimp.jpg';
import Salmon from './../images/Salmon.jpg';

const orderData = [
  {
    title: 'Select your size',
    withImage: false,
    data: [
      { label: 'Small', value: '6.25', count: 0 },
      { label: 'Medium', value: '7.55', count: 0 },
      { label: 'Large', value: '8.85', count: 0 },
    ],
  },
  {
    title: 'Select your crust',
    withImage: true,
    data: [
      {
        label: 'Thin crust',
        value: '0.75',
        count: 0,
        img: thin,
      },
      {
        label: 'Deep Dish',
        value: '1.00',
        count: 0,
        img: deep,
      },
      {
        label: 'Hand tossed Round',
        value: '1.00',
        count: 0,
        img: hand,
      },
      {
        label: 'Califlower Crust',
        value: '1.10',
        count: 0,
        img: cal,
      },
    ],
  },
  {
    title: 'Select your meats',
    withImage: true,
    data: [
      {
        label: 'Pepperoni',
        value: '0.75',
        count: 0,
        img: Pepperoni,
      },
      {
        label: 'Bacon',
        value: '0.85',
        count: 0,
        img: Bacon,
      },
      {
        label: 'Beef',
        value: '0.75',
        count: 0,
        img: Beef,
      },
      {
        label: 'Bbq chicken',
        value: '1.10',
        count: 0,
        img: BBQ,
      },
      { label: 'Ham', value: '0.75', count: 0, img: Ham },
      {
        label: 'Meatballs',
        value: '0.75',
        count: 0,
        img: Meatballs,
      },
      {
        label: 'Sausage',
        value: '0.75',
        count: 0,
        img: Sausage,
      },
      {
        label: 'Salami',
        value: '0.75',
        count: 0,
        img: cal,
      },
      {
        label: 'Turkey',
        value: '0.75',
        count: 0,
        img: Turkey,
      },
    ],
  },
  {
    title: 'Select your Cheese',
    withImage: true,
    data: [
      {
        label: 'American',
        value: '0.75',
        count: 0,
        img: American,
      },
      {
        label: 'Cheddar',
        value: '0.75',
        count: 0,
        img: Cheddar,
      },
      {
        label: 'Blue Cheese',
        value: '0.75',
        count: 0,
        img: blue,
      },
      {
        label: 'Pepper Jack',
        value: '0.75',
        count: 0,
        img: Pepperjack,
      },
      {
        label: 'Colby',
        value: '0.75',
        count: 0,
        img: Colby,
      },
      {
        label: 'Feta',
        value: '1.10',
        count: 0,
        img: feta,
      },
      {
        label: 'Smoked Gouda',
        value: '1.10',
        count: 0,
        img: Smoked,
      },
      {
        label: 'Mozerella',
        value: '0.75',
        count: 0,
        img: Mozzarella,
      },
    ],
  },
  {
    title: 'Select your vegtables/fruit',
    withImage: true,
    data: [
      {
        label: 'Avacado',
        value: '2.00',
        count: 0,
        img: Avacado,
      },
      {
        label: 'Cherry tomatoes',
        value: '1.05',
        count: 0,
        img: CherryTomatoes,
      },
      {
        label: 'Green Pepper',
        value: '1.05',
        count: 0,
        img: GreenPeppers,
      },
      {
        label: 'Mushrooms',
        value: '1.05',
        count: 0,
        img: Mushrooms,
      },
      {
        label: 'Onions',
        value: '1.05',
        count: 0,
        img: Onions,
      },
      {
        label: 'Olives',
        value: '1.05',
        count: 0,
        img: Olives,
      },
      {
        label: 'Red Beans',
        value: '1.05',
        count: 0,
        img: redbeans,
      },
      {
        label: 'Red Pepper',
        value: '1.05',
        count: 0,
        img: redpeppers,
      },
      {
        label: 'Roasted Garlic',
        value: '1.05',
        count: 0,
        img: roasted,
      },
      {
        label: 'Spinach',
        value: '0.75',
        count: 0,
        img: Spinach,
      },
      {
        label: 'Zucchini',
        value: '1.10',
        count: 0,
        img: Zucchini,
      },
      {
        label: 'Sweet Corn',
        value: '1.05',
        count: 0,
        img: Sweetcorn,
      },
      {
        label: 'Pickles',
        value: '1.05',
        count: 0,
        img: Pickles,
      },
      {
        label: 'Pinapple',
        value: '1.05',
        count: 0,
        img: Pinapple,
      },
    ],
  },
  {
    title: 'Select your Herbs and Spices',
    withImage: false,
    data: [
      { label: 'Basil', value: '0.75', count: 0 },
      { label: 'Chives', value: '0.75', count: 0 },
      { label: 'Cilantro', value: '0.75', count: 0 },
      { label: 'Dill', value: '0.75', count: 0 },
      { label: 'Garlic', value: '0.75', count: 0 },
      { label: 'Oregano', value: '0.75', count: 0 },
      { label: 'Pepper', value: '0.75', count: 0 },
      { label: 'Rosemary', value: '0.75', count: 0 },
      {
        label: 'Jalapeno Peppers',
        value: '0.75',
        count: 0,
      },
    ],
  },
  {
    title: 'Select your specialty items',
    withImage: true,
    data: [
      {
        label: 'Mac and Cheese',
        value: '3.25',
        count: 0,
        img: Mac,
      },
      {
        label: 'Lobster',
        value: '4.25',
        count: 0,
        img: Lobster,
      },
      {
        label: 'Shrimp',
        value: '4.10',
        count: 0,
        img: Shrimp,
      },
      {
        label: 'Salmon',
        value: '4.10',
        count: 0,
        img: Salmon,
      },
      {
        label: 'Mashed Potatoes',
        value: '1.50',
        count: 0,
        img: mashed,
      },
    ],
  },
];

export default orderData;
