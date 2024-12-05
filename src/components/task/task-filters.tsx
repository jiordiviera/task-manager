'use client'

import {useTaskContext} from '@/context/task-context'

const filters = [
    {id: 'all', label: 'All'},
    {id: 'open', label: 'Open'},
    {id: 'closed', label: 'Closed'},
    {id: 'archived', label: 'Archived'},
] as const

export default function TaskFilters() {
    const {activeFilter, setActiveFilter, counts} = useTaskContext()

    return (
        <div className="flex flex-wrap items-center justify-center space-x-1 px-4 py-4 sm:px-8">
            <div className="flex  items-center space-x-1">
                {filters.map((filter, index) => (
                    <div key={filter.id} className="flex items-center">
                        <button
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex items-center space-x-2 px-1 py-2 rounded-full transition-colors duration-200
                                ${activeFilter === filter.id
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <span className="font-medium text-sm sm:text-base">{filter.label}</span>
                            <span className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs sm:text-sm font-medium rounded-full
                                ${activeFilter === filter.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                                {counts[filter.id]}
                            </span>
                        </button>
                        {index < filters.length - 1 && (
                            <div className="h-4 w-px bg-gray-200 mx-1 sm:mx-2"/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}