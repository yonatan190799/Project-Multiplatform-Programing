module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontWeight:{
        '600': '600',
      },
      spacing:{
        '287' : '287px',
        '66' : '66px',
        '419' : '419px',
        '351' : '351px',
        '378' : '378px',
        '105' : '105px',
        '446' : '446px',
        '75' : '75px',
        '300' : '300px',
        '720' : '720px',
        '632' : '570px',
        '600' : '700px',
        '1185' : '1165px',
        '1105' : '1112px',
        '800' : '800px',
        '588' : '588px',
        '130' : '130px',
        '35'  : '30px',

      },
      colors: {
        'header': '#575757',
        'button0': '#C00000',
        'button1': '#8D0000',
        'button2': '#FFFFFF',
        'button3': '#EDEDED',
      },
      fontFamily: {
        'slogan': ['Roboto'],
        'vision': ['Roboto']
      },
      fontSize: {
        '100': '100px',
        '40' : '40px',
        '700' : '700px',
        '29' : '29px',
        '28' : '26px',
        '46' : '45px',
      }
    },
  },
  variants: {
    extend: {
      padding: ['responsive', 'hover', 'focus', 'active'],
    },
  }, 
  plugins: [],
}
