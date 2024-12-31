const muidashboardImage = 'img/projects/mui-dashboard.png'
const ipTrackerImage = 'img/projects/ip-tracker.webp'

let listOfItems = [
  {
    title: 'IP Tracker',
    image: ipTrackerImage,
    overview:
      'A Frontend Mentor Challenge to find the location of an IP address or domain. Works with the Ipify api to get data and Leaflet to render a map.',
    pagePath: '/projects/ip-tracker',
    gitHubUrl: 'https://github.com/seezmashele/frontend-ip-tracker',
    externalUrl: 'https://frontend-ip-tracker.vercel.app/',
    projectTags: ['Next.js', 'TailwindCSS']
  },
  {
    title: 'Mui Dashboard',
    image: muidashboardImage,
    overview:
      'A dashboard example with several pages built with various Material UI Components.',
    pagePath: '/projects/mui-dashboard',
    gitHubUrl: 'https://github.com/seezmashele/mui-dashboard',
    externalUrl: 'https://mui-dashboard.web.app/',
    projectTags: ['MUI', 'Firebase']
  }
]

export default listOfItems
