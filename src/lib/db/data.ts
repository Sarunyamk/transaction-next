type Category = {
  name: string;
  type: 'expense' | 'income';
  image: string;
  sequence: number | null;
};

const path = '../../../public';

export const categories: Category[] = [
  {
    name: 'Automobile',
    type: 'income',
    image: `${path}/categories/automobile.png`,
    sequence: null
  },
  {
    name: 'Drink',
    type: 'income',
    image: `${path}/categories/drink.png`,
    sequence: null
  },
  {
    name: 'Education',
    type: 'expense',
    image: `${path}/categories/education.png`,
    sequence: null
  },
  {
    name: 'Entertainment',
    type: 'expense',
    image:`${path}/categories/entertainment.png`,
    sequence: null
  },
  {
    name: 'Food',
    type: 'expense',
    image: `${path}/categories/food.png`,
    sequence: null
  },
  {
    name: 'Gift',
    type: 'expense',
    image: `${path}/categories/gift.png`,
    sequence: null
  },
  {
    name: 'Groceries',
    type: 'expense',
    image: `${path}/categories/groceries.png`,
    sequence: null
  },
  {
    name: 'Health Care',
    type: 'expense',
    image: `${path}/categories/health-care.png`,
    sequence: null
  },
  // {
  //   name: 'Housing',
  //   type: 'expense',
  //   image: '/categories/housing.png',
  //   sequence: null
  // },
  // {
  //   name: 'Insurance',
  //   type: 'expense',
  //   image: '/categories/insurance.png',
  //   sequence: null
  // },
  // {
  //   name: 'Investment',
  //   type: 'income',
  //   image: '/categories/investment.png',
  //   sequence: null
  // },
  // {
  //   name: 'Miscellaneous',
  //   type: 'expense',
  //   image: '/categories/miscellaneous.png',
  //   sequence: null
  // },
  // {
  //   name: 'Other',
  //   type: 'expense',
  //   image: '/categories/other-expense.png',
  //   sequence: 1
  // },
  // {
  //   name: 'Other',
  //   type: 'income',
  //   image: '/categories/other-income.png',
  //   sequence: 1
  // },
  // {
  //   name: 'Personal Care',
  //   type: 'expense',
  //   image: '/categories/personal-care.png',
  //   sequence: null
  // },
  // {
  //   name: 'Salary',
  //   type: 'income',
  //   image: '/categories/salary.png',
  //   sequence: null
  // },
  // {
  //   name: 'Shopping',
  //   type: 'expense',
  //   image: '/categories/shopping.png',
  //   sequence: null
  // },
  // {
  //   name: 'Transportation',
  //   type: 'expense',
  //   image: '/categories/transportation.png',
  //   sequence: null
  // },
  // {
  //   name: 'Travel',
  //   type: 'expense',
  //   image: '/categories/travel.png',
  //   sequence: null
  // },
  // {
  //   name: 'Utilities',
  //   type: 'expense',
  //   image: '/categories/utilities.png',
  //   sequence: null
  // }
];
