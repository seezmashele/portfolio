const fancynotebookImage = "img/projects/fancy-notebook.png"
const muidashboardImage = "img/projects/mui-dashboard.png"
const ipTrackerImage = "img/projects/ip-tracker.webp"
const publikeventsImage = "img/projects/publik.png"

let listOfItems = [
  {
    title: "Publik Events",
    image: publikeventsImage,
    overview:
      "A Next.js website to find and share events. Styled with TailwindCSS and MUI. Data and images are stored on Firebase.",
    pagePath: "/projects/publik-events",
    gitHubUrl: "https://github.com/seezmash/publik-events",
    externalUrl: "https://publik-events.vercel.app",
    projectTags: ["Next.js", "TailwindCSS"]
  },
  {
    title: "Mui Dashboard",
    image: muidashboardImage,
    overview:
      "A dashboard example with several pages built with various Material UI Components.",
    pagePath: "/projects/mui-dashboard",
    gitHubUrl: "https://github.com/seezmash/mui-dashboard",
    externalUrl: "https://mui-dashboard.web.app/",
    projectTags: ["MUI", "Firebase"]
  },
  {
    title: "IP Tracker",
    image: ipTrackerImage,
    overview:
      "A Frontend Mentor Challenge to find the location of an IP address or domain. Works with the Ipify api to get data and Leaflet to render a map.",
    pagePath: "/projects/ip-tracker",
    gitHubUrl: "https://github.com/seezmashele/frontend-ip-tracker",
    externalUrl: "https://frontend-ip-tracker.vercel.app/",
    projectTags: ["Next.js", "TailwindCSS"]
  },
  {
    title: "Fancy Notebook",
    image: fancynotebookImage,
    overview: "Add, remove and update notes on a simple React + Firebase app.",
    pagePath: "/projects/fancy-notebook",
    gitHubUrl: "https://github.com/seezmash/fancy-notebook",
    externalUrl: "https://fancy-notebook.web.app",
    projectTags: ["React", "Firebase", "TailwindCSS"]
  }
]

export default listOfItems
