"use client"
import { createContext, ReactNode, useContext, useState } from "react";

export const TaskContex = createContext({});

interface Props {
    children: ReactNode
}
export interface Task {
    name: string,
    edad: number,
    status: string
}

export const useTasks = () => {
    const context = useContext(TaskContex)
    if (!context) throw new Error('useTasks must used withing a provider')
    return context
}

export const TaskProvier = ({ children }: Props) => {

    const [tasks, setTasks] = useState([
        { name: "Jimmy", edad: 23, status: "gay" },
        { name: "Luis", edad: 28, status: "No binario" },
        { name: "Edgar", edad: 18, status: "Trans" }

    ])
    // const tasks: Array<Task>= 

    const createTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
    }

    return <TaskContex.Provider value={{ tasks, createTask }}>
        {children}
    </TaskContex.Provider>
}