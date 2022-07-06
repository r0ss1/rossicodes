import useSWR from 'swr';
import React, { useState, useEffect } from 'react';
import { SWRConfig } from 'swr';
import { getGithubUser } from '../lib/github';
import Calendar from '../components/calendar';
import GithubIcon from '../components/githubicon';
import AppleIcon from '../components/appleicon';
import FootstepsIcon from '../components/footstepsIcon';
import CaloriesIcon from '../components/caloriesicon';
import MapIcon from '../components/mapicon';
import GymIcon from '../components/gymIcon';
import CarbsIcon from '../components/carbsicon';
import ProteinIcon from '../components/proteinicon';
import FatIcon from '../components/faticon';
import FitnessIcon from '../components/fitnessicon';
import { motion } from 'framer-motion';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

 
export default function Dashboard(props) {
  const { data } = useSWR('/api/github');
  const { fallback } = props;
  const [isLoading, setLoading] = useState(false)
  const [kcals, setKcals] = useState(0)
  const [steps, setSteps] = useState(0)
  const [distance, setDistance] = useState(0)
  const [weight, setWeight] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [protein, setProtein] = useState(0)
  const [fat, setFat] = useState(0)
  const [workout, setWorkout] = useState([])
  const [timestamp, setTimestamp] = useState()


  const contributionCalendar = data?.contributionsCollection?.contributionCalendar;
  const iconColor = '#57637c'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    setLoading(true)
    fetch('api/health-data')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setKcals(parseInt(data.kcals))
        setSteps(parseInt(data.steps))
        setDistance(parseInt(data.distance))
        setWeight(parseInt(data.weight))
        setCarbs(parseInt(data.carbs))
        setProtein(parseInt(data.protein))
        setFat(parseInt(data.fat))
        setWorkout(parseInt(data.workout))
        setTimestamp(parseInt(data.timestamp))
        setLoading(false)
      })
  }, [])

  if (isLoading) return <h1 className="text-4xl font-extrabold">Loading...</h1>
  if (!data) return <h2 className="text-xl font-extrabold">No data from Github</h2>


  return (
    <SWRConfig value={{ fallback }}>
    <div className="flex flex-col gap-12 mb-10 pt-6 md:gap-6 md:pt-20">
      <div>
      <h1 className="text-4xl font-extrabold">
          Dashboard
      </h1>
      </div>
      <div className="flex flex-col text-left md:text-lg font-bold mt-4 sm:mt-0">
      <div className='flex mb-4'>
        <GithubIcon iconColor={iconColor} /> <h3 className='font-bold'>Code</h3> 
      </div> 
          <Calendar data={contributionCalendar} />
      </div>
      </div>

      <div>

    <motion.div
    className='mt-4 mb-10'
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 230,
      damping: 20
    }}
        >
        <div className='flex mb-4 text-left md:text-lg font-bold mt-4 sm:mt-0'>
          <CaloriesIcon iconColor={iconColor} /> <h3 className='font-bold'>Diet</h3> 
      </div>
        <div className="flex flex-wrap">  
        <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4"><div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="uppercase font-bold text-xs">Fat</h5>
                  <span className="font-semibold text-xl">{fat ? fat : 0}</span> g</div>
                <div className="relative w-auto pl-4 flex-initial"><div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-50"><FatIcon iconColor={iconColor} /></div>
                </div>
              </div>
                <p className="text-sm text-blueGray-400 mt-4"><span className="text-emerald-500">3.48% </span><span className="whitespace-nowrap"> / 142g limit</span></p>
              </div>
            </div>
            </div>
            <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4"><div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="uppercase font-bold text-xs">Carbs</h5><span className="font-semibold text-xl">{carbs ? carbs : 0}</span> g</div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-50"><CarbsIcon iconColor={iconColor} /></div></div>
              </div><p className="text-sm mt-4"><span className="text-red-500">3.48% </span><span className="whitespace-nowrap"> / 27g limit</span></p></div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4"><div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="uppercase font-bold text-xs">Protein</h5><span className="font-semibold text-xl">{protein ? protein : 0}</span> g</div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-50"><ProteinIcon iconColor={iconColor} /></div></div>
              </div><p className="text-sm text-blueGray-400 mt-4"><span className="text-red-500">3.48% </span><span className="whitespace-nowrap"> / 128g target</span></p></div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm"><span className='text-green-50'>{kcals}</span> / 1900 kcals</p> 
          <div className="m-auto w-full bg-grey-50 h-1">
            <div className="bg-green-50 h-1 w-90%"></div>
            </div>
          </div>
      </motion.div>

      <motion.div
    className='mt-4 mb-10'
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 230,
      damping: 20
    }}
        >
        <div className='flex mb-4 text-left md:text-lg font-bold mt-4 sm:mt-0'>
          <FitnessIcon iconColor={iconColor} /> <h3 className='font-bold'>Fitness</h3> 
      </div>  
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4"><div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="uppercase font-bold text-xs">Steps</h5><span className="font-semibold text-xl">{steps ? steps : 0}</span></div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-50"><FootstepsIcon iconColor={iconColor} /></div></div>
              </div><p className="text-sm text-blueGray-400 mt-4"><span className="text-red-500">3.48% </span><span className="whitespace-nowrap">/ 10000 target</span></p></div>
              </div>
            </div>
          <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4"><div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">Workout</h5>
                  <span className="font-semibold text-xl text-blueGray-700">{ workout.length ? "Yes" : "No" }</span></div>
                <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-50 "><GymIcon iconColor={iconColor} /></div>
                </div></div><p className="text-sm text-blueGray-400 mt-4">
                  <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
                  <span className="whitespace-nowrap">3x per wk</span></p></div>
            </div>
            </div>
            <div className="w-full lg:w-4/12 xl:w-4/12 p-4">
            <div className="relative flex flex-col min-w-0 break-words bg-grey-50 rounded mb-6 xl:mb-0 shadow-lg">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Distance</h5>
                    <span className="font-semibold text-xl text-blueGray-700">{distance ? distance : 0} mi</span></div>
                  <div className="relative w-auto pl-4 flex-initial">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-50 "><MapIcon iconColor={iconColor} /></div></div></div><p className="text-sm text-blueGray-400 mt-4"><span className="text-orange-500 mr-2"><i className="fas fa-arrow-down"></i> 1.10%</span><span className="whitespace-nowrap">/ 6 mi</span></p></div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm"><span className='text-purple-50'>1</span> / 2 fitness goals</p> 
          <div className="m-auto w-full bg-grey-50 h-1">
            <div className="bg-purple-50 h-1 w-90%"></div>
            </div>
          </div>
        </motion.div>
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

  