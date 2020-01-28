import { Comment, Expense } from 'pleo-types';

export const expensesFixture1 = (): Expense[] => [
  {
    id: '801f3b05-166d-4456-97ed-2d0f6f14caf0',
    amount: { value: '200', currency: 'EUR' },
    date: 1580083200000,
    merchant: 'Apple',
    comments: [
      {
        id: '1e21648c-1d44-4dea-80cb-cf70236597f8',
        text: 'iPhone charger',
        expenseId: '801f3b05-166d-4456-97ed-2d0f6f14caf0',
        date: 1580121067880,
      },
      {
        id: 'bc4290b9-df8c-48f6-ad8d-54608b820744',
        text: 'cables',
        expenseId: '801f3b05-166d-4456-97ed-2d0f6f14caf0',
        date: 1580121067880,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '020fdeb6-d9c1-4a09-bdd3-8f5dd381c83c',
    amount: { value: '50', currency: 'EUR' },
    date: 1580126400000,
    merchant: 'Lindt',
    comments: [
      {
        id: 'b0d07e41-449c-405c-a609-2dba828d1e80',
        text: 'Lots of chocolate',
        expenseId: '020fdeb6-d9c1-4a09-bdd3-8f5dd381c83c',
        date: 1580180738336,
      },
      {
        id: '97acbffd-ab46-4d88-b2bc-e4291e48ad13',
        text: 'and more chocolate',
        expenseId: '020fdeb6-d9c1-4a09-bdd3-8f5dd381c83c',
        date: 1580180745833,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '1def7f68-5576-40a2-a187-973f5a797415',
    amount: { value: '1000', currency: 'EUR' },
    date: 1580139000000,
    merchant: 'Globus',
    comments: [],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '1f961ff1-d417-4331-a30b-c4cb4da8b431',
    amount: { value: '300', currency: 'USD' },
    date: 1580220000000,
    merchant: 'Best Buy',
    comments: [
      {
        id: '98afc7c2-fb7e-4770-aa68-451753a6c356',
        text: 'New headphones',
        expenseId: '1f961ff1-d417-4331-a30b-c4cb4da8b431',
        date: 1580174382499,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
];

export const expensesFixture2 = (): Expense[] => [
  {
    id: '1def7f68-5576-40a2-a187-973f5a797415',
    amount: { value: '1000', currency: 'EUR' },
    date: 1580139000000,
    merchant: 'Globus',
    comments: [],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '1f961ff1-d417-4331-a30b-c4cb4da8b431',
    amount: { value: '300', currency: 'USD' },
    date: 1580220000000,
    merchant: 'Best Buy',
    comments: [
      {
        id: '98afc7c2-fb7e-4770-aa68-451753a6c356',
        text: 'New headphones',
        expenseId: '1f961ff1-d417-4331-a30b-c4cb4da8b431',
        date: 1580174382499,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '5b99606419de4bdda4d77372',
    amount: { value: '3293.15', currency: 'DKK' },
    date: 1476419128117,
    merchant: 'ENOMEN',
    receipts: [],
    comments: [],
    category: '',
    user: { first: 'Palmer', last: 'Howard', email: 'palmer.howard@pleo.io' },
  },
  {
    id: '5b9960643a396ae62ae89b02',
    amount: { value: '1247.4', currency: 'DKK' },
    date: 1449067639618,
    merchant: 'MAGNAFONE',
    receipts: [],
    comments: [],
    category: '',
    user: { first: 'Mccormick', last: 'Barber', email: 'mccormick.barber@pleo.io' },
  },
  {
    id: '318cc78e-c6c5-48fd-a749-891de6e14432',
    amount: { value: '500', currency: 'EUR' },
    date: 1580083200000,
    merchant: 'NikeTown',
    comments: [
      {
        id: 'e0ab592c-c613-4dcd-a0e9-69737b36a392',
        text: 'Bought some kicks!',
        expenseId: '318cc78e-c6c5-48fd-a749-891de6e14432',
        date: 1580119988296,
      },
    ],
    receipts: [
      '88233b90-c236-490b-a584-fda90b34c9ba',
      'd1296bfd-e8cb-4d29-ba23-bd60ad68aecc',
      '3d4a8145-de9b-4275-9929-d4327f8662b3',
      'd2574f88-d464-425b-9d1b-23ab795bbd9b',
    ],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '5fc6f7e0-36f3-40cd-9da8-94967f08517e',
    amount: { value: '200', currency: 'EUR' },
    date: 1579996800000,
    merchant: 'Whole Foods',
    comments: [
      {
        id: '5349a7ca-5acb-443b-bbf2-1e5a87df7d1b',
        text: 'Yummy in my tummy',
        expenseId: '5fc6f7e0-36f3-40cd-9da8-94967f08517e',
        date: 1580120030764,
      },
      {
        id: 'bc97f28b-76e1-40a0-b007-7d867faa9e15',
        text: 'Groceries for next two days',
        expenseId: '5fc6f7e0-36f3-40cd-9da8-94967f08517e',
        date: 1580120044175,
      },
      {
        id: '854d5364-b09c-410b-a0b2-62ac3066c050',
        text: 'Ate lunch at buffet',
        expenseId: '5fc6f7e0-36f3-40cd-9da8-94967f08517e',
        date: 1580120054432,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '06bfacdb-554a-42fa-8d09-783d480917cc',
    amount: { value: '80', currency: 'CHF' },
    date: 1579910400000,
    merchant: 'Fielmann',
    comments: [
      {
        id: 'd11d4373-6f9c-4f62-9c83-4d637519ef5d',
        text: 'Contact Lenses',
        expenseId: '06bfacdb-554a-42fa-8d09-783d480917cc',
        date: 1580120085033,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
  {
    id: '9dd93c2e-3b0c-47cb-b993-7d99f71599e8',
    amount: { value: '250', currency: 'CHF' },
    date: 1579564800000,
    merchant: 'Axa Winterthur',
    comments: [
      {
        id: 'd0e36b57-2f57-4336-b1c1-3c1a6e6cf786',
        text: 'Annual auto insurance',
        expenseId: '9dd93c2e-3b0c-47cb-b993-7d99f71599e8',
        date: 1580120147162,
      },
      {
        id: '6089a4b6-d410-4047-82ec-d9d6623fe0cb',
        text: 'Most basic option',
        expenseId: '9dd93c2e-3b0c-47cb-b993-7d99f71599e8',
        date: 1580120147162,
      },
    ],
    receipts: [],
    category: '',
    user: { first: 'Marcus', last: 'Egues', email: 'marcusegues@gmail.com' },
  },
];

export const commentFixture1 = (): Comment => ({
  id: 1,
  text: 'This is a test comment',
  expenseId: '801f3b05-166d-4456-97ed-2d0f6f14caf0',
  date: 1580126400000,
});
export const commentFixture2 = (): Comment => ({
  id: 2,
  text: 'This is another test comment',
  expenseId: '801f3b05-166d-4456-97ed-2d0f6f14caf0',
  date: 1580126400000,
});
export const commentFixture3 = (): Comment => ({
  id: 1,
  text: 'And one more test comment',
  expenseId: '020fdeb6-d9c1-4a09-bdd3-8f5dd381c83c',
  date: 1580126400000,
});
