import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
const Tip = ({icon,name}) => {
  return (
    <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>{icon}</TooltipTrigger>
                <TooltipContent className='bg-gray-900 rounded text-white font-bold'>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
  )
}

export default Tip