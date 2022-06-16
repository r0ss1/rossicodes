import useSWR from 'swr';
import { SWRConfig } from 'swr';
import { getGithubUser } from '../lib/github';
import Calendar from '../components/calendar';
import GithubIcon from '../components/githubicon';


export default function Dashboard(props) {
  const { data } = useSWR('/api/github');
  const { fallback } = props;
  console.log(JSON.stringify(data
  ))

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;
  const iconColor = '#57637c'


  return (
    <SWRConfig value={{ fallback }}>
    <div className="flex flex-col gap-12 pb-44 pt-6 md:gap-6 md:pt-20">
      <div>
      <h1 className="text-4xl font-extrabold">
          Dashboard
      </h1>
      </div>
      <div className="flex flex-col text-left md:text-lg font-bold mt-4 sm:mt-0">
      <div className='flex mb-4'>
      <GithubIcon iconColor={iconColor} /> <h3 className='font-bold'>Github Commits</h3>
      </div>
      <p className='font-normal overflow:hidden md:text-sm mb-2'>This dashboard tracks the number of github commits I&#39;ve made this year. Data from Github api.</p>    
      <Calendar data={contributionCalendar} />
      </div>
      </div>
      </SWRConfig>
  )
}

export async function getStaticProps() {
  const githubUser = await getGithubUser();

  return {
    props: {
      fallback: {
        '/api/github': githubUser.data,
      },
    },
    revalidate: 1,
  };
}

  