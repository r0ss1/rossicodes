import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'

import clsx from 'clsx';

export default function Calendar(props) {
  const { data } = props;
  const { theme, setTheme } = useTheme()
  const iconColor = '#FB7185'

  const [selectContribution, setSelectContribution] = useState({ count: null, date: null });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter((week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7))
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) => previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  // const contributionColors = data?.colors ?? [];
  const contributionColors = ['#fda4ae','#fb7186','#d846ef','#c026d3','#a31caf'];
  console.log(contributionColors)

  return (
    <>
      <div className="relative flex flex-col">
        <ul className="flex pb-2 justify-end gap-[3px] overflow-hidden text-xs dark:text-gray md:justify-start">
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? 'invisible' : ''}`)}
              style={{ minWidth: 12.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-[3px] overflow-hidden">
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor = contribution.contributionCount > 0 ? contributionColors[contribution.contributionCount] : '#f9f9f9';
                console.log(contribution.contributionCount)

                const getRandomDelayAnimate = Math.random() * week.contributionDays.length * 0.15;

                return (
                  <motion.span
                    key={contribution.date}
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { delay: getRandomDelayAnimate },
                    }}
                    className="my-[2px] block h-[10px] w-[10px] rounded-sm bg-white"
                    style={{ backgroundColor }}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() => setSelectContribution({ count: null, date: null })}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="dark:text-gray">Less</span>
          <ul className="flex gap-1">
            <motion.li className="h-[10px] w-[10px] rounded-sm bg-white dark:bg-pitch" />
            {contributionColors.map((color, colorIndex) => (
              <motion.li
                key={color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: colorIndex * 0.3 },
                  backgroundColor: color,
                }}
                className="h-[10px] w-[10px] rounded-sm"
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded bg-darkgray px-2 text-sm dark:bg-pitch'
          )}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>
      </div>
    </>
  );
}
