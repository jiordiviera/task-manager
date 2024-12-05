export interface Task {
    id: string
    title: string
    project: string
    time: string
    participants: Participant[]
    status: 'open' | 'closed' | 'archived'
    completed: boolean
    order: number
    date: string
}

export interface Participant {
    id: string
    avatar: string
    name: string
}

export interface TaskContextType {
    tasks: Task[]
    filteredTasks: Task[]
    addTask: (task: Omit<Task, 'id' | 'order' | 'date'>) => void
    updateTask: (id: string, updates: Partial<Task>) => void
    reorderTasks: (startIndex: number, endIndex: number) => void
    activeFilter: 'all' | 'open' | 'closed' | 'archived'
    setActiveFilter: (filter: 'all' | 'open' | 'closed' | 'archived') => void
    counts: {
        all: number
        open: number
        closed: number
        archived: number
    }
}
