import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#202225",
        "middle-gray": "#2F3136",
        "light-gray" :"#36393F",
        "green" : "#3BA55D",
        "userProfileGrey" : "#292B2F",
        "hoverColor" : "#393C43",
        "textColor" : "#8E9297",
        "discordBlue" : "#5865F2"
      },
      boxShadow: {
        'bottom': '0 35px 60px 0px #202225',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  
  plugins: [],
}
export default config
 