'use client'

import React, { createContext, useContext, useState, useMemo } from 'react'
import type { Task, TaskContextType } from '@/lib/types'

const getCurrentDate = () => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

const initialTasks: Task[] = [
    {
        id: '1',
        title: 'Client Review & Feedback',
        project: 'Crypto Wallet Redesign',
        time: '10:00 PM - 11:45 PM',
        participants: [
            { id: '1', avatar: 'https://img.freepik.com/free-photo/beautiful-smiling-african-american-female-with-crisp-hair-broad-smile-shows-white-teeth-wears-casual-t-shirt-spectacles-stands-wall-rejoices-having-day-off-woman-journalist-indoor_273609-15511.jpg?uid=R174065418&ga=GA1.1.684983583.1729953876&semt=ais_tags_boosted', name: 'User 1' },
            { id: '2', avatar: 'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?t=st=1733356673~exp=1733360273~hmac=e5abd265d0c1f4e20322bc97de03c47720a5176ff4cc93f67ec888bebc3aa3a7&w=996', name: 'User 2' },
        ],
        status: 'closed',
        completed: true,
        order: 0,
        date: getCurrentDate(),
    },
    {
        id: '2',
        title: 'Create Wireframe',
        project: 'Crypto Wallet Redesign',
        time: '09:15 PM - 10:00 PM',
        participants: [
            { id: '3', avatar: 'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?t=st=1733356673~exp=1733360273~hmac=e5abd265d0c1f4e20322bc97de03c47720a5176ff4cc93f67ec888bebc3aa3a7&w=996', name: 'User 3' },
            { id: '4', avatar: 'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?t=st=1733356673~exp=1733360273~hmac=e5abd265d0c1f4e20322bc97de03c47720a5176ff4cc93f67ec888bebc3aa3a7&w=996', name: 'User 4' },
            { id: '5', avatar: 'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?t=st=1733356673~exp=1733360273~hmac=e5abd265d0c1f4e20322bc97de03c47720a5176ff4cc93f67ec888bebc3aa3a7&w=996', name: 'User 5' },
            { id: '6', avatar: 'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?t=st=1733356673~exp=1733360273~hmac=e5abd265d0c1f4e20322bc97de03c47720a5176ff4cc93f67ec888bebc3aa3a7&w=996', name: 'User 6' },
            { id: '7', avatar: 'https://img.freepik.com/free-photo/close-up-portrait-professional-successful-young-african-american-man-red-hoodie-cross-arms-chest_176420-33867.jpg?uid=R174065418&ga=GA1.1.684983583.1729953876&semt=ais_tags_boosted', name: 'User 7' },
        ],
        status: 'closed',
        completed: true,
        order: 1,
        date: getCurrentDate(),
    },
    // TODO: D'autres tâches ici
]

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: React.ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [activeFilter, setActiveFilter] = useState<'all' | 'open' | 'closed' | 'archived'>('all')

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (activeFilter === 'all') return true
            return task.status === activeFilter
        })
    }, [tasks, activeFilter])

    const counts = useMemo(() => {
        return {
            all: tasks.length,
            open: tasks.filter(task => task.status === 'open').length,
            closed: tasks.filter(task => task.status === 'closed').length,
            archived: tasks.filter(task => task.status === 'archived').length,
        }
    }, [tasks])

    const addTask = (task: Omit<Task, 'id' | 'order' | 'date'>) => {
        setTasks(currentTasks => [
            ...currentTasks,
            {
                ...task,
                id: Math.random().toString(36).substr(2, 9),
                order: currentTasks.length,
                date: getCurrentDate(),
                status: 'open', // New tasks are always open by default
            },
        ])
    }

    const updateTask = (id: string, updates: Partial<Task>) => {
        setTasks(currentTasks =>
            currentTasks.map(task =>
                task.id === id ? { ...task, ...updates } : task
            )
        )
    }

    const reorderTasks = (startIndex: number, endIndex: number) => {
        setTasks(currentTasks => {
            const result = Array.from(currentTasks)
            const [removed] = result.splice(startIndex, 1)
            result.splice(endIndex, 0, removed)
            return result.map((task, index) => ({ ...task, order: index }))
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                filteredTasks,
                addTask,
                updateTask,
                reorderTasks,
                activeFilter,
                setActiveFilter,
                counts,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export function useTaskContext() {
    const context = useContext(TaskContext)
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider')
    }
    return context
}
