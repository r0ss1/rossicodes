import GitHubCalendar from 'react-github-calendar';

export default function Dashboard() {

  const myTheme = {
    "level0": "#1c1e24",
    "level1": "#498068",
    "level2": "#228057",
    "level3": "#45FFAE",
    "level4": "#91FFCF"
  }

  return (
    <div className="flex flex-col gap-12 pb-44 pt-6 md:gap-6 md:pt-20">
      <div>
      <h1 className="text-4xl font-extrabold">
          Dashboard
      </h1>
      </div>
      <div className="flex text-center md:text-lg font-bold mt-4 sm:mt-0">
      <GitHubCalendar username="r0ss1"
        color='#45FFAF'
        theme={myTheme} />
      </div>
  </div>
  )
}
  