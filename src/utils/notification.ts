interface PropsNotification {
  image: string;
  title: string;
  date: string;
  type: string;
  desc: string;
  bgBlue: boolean;
}

export const dataNotification: PropsNotification[] = [
  {
    image: '<FaCoins />',
    title: 'Reimbursement',
    date: 'today',
    type: '<BsCheck />',
    desc: '<p>Your submission "Lorem ipsum dolor ...." with the" with a total cost of 50,000 has been <b>paid</b>, please check your BRIMO application, thank you</p>',
    bgBlue: true,
  },
  {
    image: '<FaCoins />',
    title: 'Reimbursement',
    date: 'Yesterday',
    type: '<IoCloseOutline />',
    desc: '<p>Your submission description has been <b>rejected</b>, please click for details<p>',
    bgBlue: false,
  },
  {
    image: '<FaCoins />',
    title: 'Reimbursement',
    date: '2022-10-06',
    type: '<BsArrowRightShort />',
    desc: '<p>Your submission will be <b>processed</b> according to the reimbursement schedule. Please wait</p>',
    bgBlue: true,
  },
  {
    image: '<CgPill />',
    title: 'Sickenss',
    date: '2022-10-05',
    type: '<BsCheck />',
    desc: '<p>Your submission has been <b>approved</b> by the Superior</p>',
    bgBlue: true,
  },
  {
    image: '<CgPill />',
    title: 'Sickenss',
    date: '2022-10-05',
    type: '<IoCloseOutline />',
    desc: '<p>Your submission has been <b>rejected</b> please confirm with your Superior</p>',
    bgBlue: false,
  },
  {
    image: '<CgPill />',
    title: 'Sickenss',
    date: '2022-10-05',
    type: '<BsArrowRightShort />',
    desc: '<p>Your submission is being <b>reviewed</b> to the Superior for the Approvel process, please wait</p>',
    bgBlue: false,
  },
  {
    image: '<FcAlarmClock />',
    title: 'Overtime',
    date: '2022-10-05',
    type: '<BsCheck />',
    desc: '<p>Your submission has been <b>approved</b> by the Superior</p>',
    bgBlue: true,
  },
  {
    image: '<FcAlarmClock />',
    title: 'Overtime',
    date: '2022-10-05',
    type: '<IoCloseOutline />',
    desc: '<p>Your submission has been <b>rejected</b> please confirm with your Superior</p>',
    bgBlue: false,
  },
  {
    image: '<FcAlarmClock />',
    title: 'Overtime',
    date: '2022-10-05',
    type: '<BsArrowRightShort />',
    desc: '<p>Your submission is being <b>reviewed</b> to the Superior for the Approvel process, please wait</p>',
    bgBlue: false,
  },
];
