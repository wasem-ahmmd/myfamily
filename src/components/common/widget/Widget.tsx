import React, { FC } from 'react'
import Card from '../cards/Card'



type Props = {
  icon?: React.ReactNode | string
  title?: string
  subtitle?: string
}

const Widget : FC<Props>= ({ icon, title, subtitle }) => {
  return (
    <Card className="!flex-row flex-grow items-center rounded-[20px]">
    <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
      <div className="rounded-full bg-BG-4 p-3">
        <span className="flex items-center text-brand-500">
          {icon}
        </span>
      </div>
    </div>

    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
      <p className="font-sans text-sm font-medium  text-gray-600">{title}</p>
      <h4 className="text-xl font-bold font-sans text-navy-700 dark:text-white">
        {subtitle}
      </h4>
    </div>
  </Card>
  )
}

export default Widget