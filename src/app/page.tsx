'use client'

import TaskHeader from '@/components/task/task-header'
import TaskFilters from '@/components/task/task-filters'
import TaskList from '@/components/task/task-list'
import { useState } from 'react'
import {useTaskContext} from "@/context/task-context";

const navItems = [
    { id: 'messages', label: 'Messages' },
    { id: 'today', label: "Today's Task" },
    { id: 'activity', label: 'Last Activity' }
]

export default function Home() {
    const [activeTab, setActiveTab] = useState('today')
    const { setActiveFilter } = useTaskContext()

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
        setActiveFilter('all')  // Reset filter when changing tabs
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto shadow-sm min-h-screen">
                <nav className="border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleTabChange(item.id)}
                                className={`px-6 py-4 text-lg font-medium transition-colors duration-200 border-b-2 ${
                                    activeTab === item.id
                                        ? 'text-gray-900 border-gray-900'
                                        : 'text-gray-400 border-transparent hover:text-gray-600'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
                {activeTab === 'today' && (
                    <>
                        <TaskHeader/>
                        <TaskFilters/>
                        <TaskList/>
                    </>
                )}
                {activeTab === 'messages' && (
                    <div className="flex items-center justify-center h-[calc(100vh-64px)] text-gray-500">
                        Messages section (empty for now)
                    </div>
                )}
                {activeTab === 'activity' && (
                    <div className="flex items-center justify-center h-[calc(100vh-64px)] text-gray-500">
                        Last Activity section (empty for now)
                    </div>
                )}
            </div>
        </main>
    )
}

