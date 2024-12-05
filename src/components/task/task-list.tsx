'use client'

import { useTaskContext } from '@/context/task-context'
import TaskCard from './task-card'
import {DragDropContext, Droppable, Draggable, DropResult} from 'react-beautiful-dnd'

export default function TaskList() {
    const { filteredTasks, updateTask, reorderTasks } = useTaskContext()

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return
        reorderTasks(result.source.index, result.destination.index)
    }

    return (
        <div className="px-8 py-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="taskList">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className={"space-y-4"}>
                            {filteredTasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TaskCard
                                                task={task}
                                                onToggleComplete={() => {
                                                    const newStatus = task.completed ? 'open' : 'closed'
                                                    updateTask(task.id, {
                                                        completed: !task.completed,
                                                        status: newStatus
                                                    })
                                                }}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

