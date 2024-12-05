'use client'

import { useTaskContext } from '@/context/task-context'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import {toast} from "sonner";

export default function TaskHeader() {
    const { addTask } = useTaskContext()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        addTask({
            title: formData.get('title') as string,
            project: formData.get('project') as string,
            time: formData.get('time') as string,
            participants: [],
            status: 'open',
            completed: false,
        })

        setIsDialogOpen(false)
        toast.success('Task added successfully!')
    }

    return (
        <div className="flex justify-between items-center py-6 px-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Today&#39;s Task</h1>
                <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-blue-100 transition-colors duration-200">
                        <Plus className="w-5 h-5" />
                        New Task
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Create New Task</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                Task Title
                            </label>
                            <input
                                id="title"
                                name="title"
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="project" className="text-sm font-medium text-gray-700">
                                Project
                            </label>
                            <input
                                id="project"
                                name="project"
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="time" className="text-sm font-medium text-gray-700">
                                Time
                            </label>
                            <input
                                id="time"
                                name="time"
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="e.g. 10:00 AM - 11:00 AM"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 mt-2"
                        >
                            Create Task
                        </button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

