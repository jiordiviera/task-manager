import {Check} from 'lucide-react'
import Image from 'next/image'
import {Task} from '@/lib/types'

interface TaskCardProps {
    task: Task
    onToggleComplete: () => void
}

export default function TaskCard({task, onToggleComplete}: TaskCardProps) {
    const extraParticipants = task.participants.length > 2 ? task.participants.length - 2 : 0

    return (
        <div
            className="group bg-white hover:bg-gray-200 transition-colors duration-200 border-b border-gray-100 rounded-lg">
            <div className="flex items-center justify-between py-5 px-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-[20px] font-medium leading-tight ${
                            task.completed && 'line-through'
                        }`}>
                            {task.title}
                        </h3>
                        <button
                            onClick={onToggleComplete}
                            className={`ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200
                ${task.completed
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border-2 border-gray-200 group-hover:border-gray-300'
                            }`}
                        >
                            {task.completed && <Check className="w-4 h-4 stroke-[2.5]"/>}
                        </button>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                        <span className="font-normal">{task.project}</span>
                    </div>
                    <hr className="border-gray-200 my-3"/>
                    <div className="flex items-center justify-between mt-3">
                        <div className={"space-x-2"}>
                            <span className="text-gray-400 text-sm">Today</span>
                            <span className="text-gray-300 text-sm">{task.time}</span>
                        </div>
                        <div className="flex -space-x-2">
                            {task.participants.slice(0, 2).map((participant, index) => (
                                <div
                                    key={participant.id}
                                    className="relative"
                                    style={{zIndex: task.participants.length - index}}
                                >
                                    <Image
                                        src={participant.avatar}
                                        alt={participant.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full size-8 border-2 border-white"
                                    />
                                </div>
                            ))}
                            {extraParticipants > 0 && (
                                <div className="relative z-0">
                                    <div
                                        className="size-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                                        <span className="text-xs text-blue-600 font-medium">+{extraParticipants}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

