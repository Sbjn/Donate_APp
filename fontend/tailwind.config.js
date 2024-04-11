/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '#bbb': '#bbb',
        '#53c28b70':'#53c28b70', 
        '#7439db':'#7439db', 
      },
      height:{
        'big': '600px',
        '400':'400px',
        '700':'700px',
        '15':'15px',
      },
      width:{
        'maxw1370':'1370px',
        '15':'15px',
      },
      transitionDelay:{
        '3s':'3000ms'
      },
      animation:{
        'bounce-slow-1':'bounceslow1 3s ease alternate infinite',
        'bounce-slow-2':'bounceslow2 3s ease alternate infinite'
      },
      keyframes:{
        bounceslow1:{
          'from':{ transform: 'translateY(-15px)' },
          'to':{transform: 'translateY(0px) scale(1.03)'}
        },
        bounceslow2:{
          'from':{ transform: 'translateY(-10px)' },
          'to':{transform: 'translateY(10px)'}
        },
      },
    },
    borderWidth:{
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
  },
  plugins: [],
}


// :nth-child ----------->>   [&>*:nth-child(3)]:

// bg-[url(https://placekitten.com/1400)] 