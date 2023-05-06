import React, { ChangeEvent, FormEvent, FormEventHandler, ReactNode, useRef, useState } from 'react';
import { useTasks } from '../../context/tasksContext';
import { Task } from '../../context/tasksContext';
import { useRouter } from 'next/router';

const Page = () => {
    const [task, setTask] = useState({});
    const { tasks }: any = useTasks();
    const { createTask }: any = useTasks();
    const refName = useRef(null)
    const router = useRouter();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
        console.log(task)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask(task);
        const form = e.target as HTMLFormElement;
        form.reset();
    }
    return <>
        <div className='container d-flex flex-column' style={{ gap: "1rem" }} >
            <form onSubmit={handleSubmit} action="" style={{ display: "flex", flexDirection: "column", }}>
                <label htmlFor="name">Name</label>
                <input ref={refName} onChange={handleChange} type="text" name='name' />
                <label htmlFor="edad">Edad</label>
                <input onChange={handleChange} type="number" name='edad' />
                <label htmlFor="status">Genero</label>
                <input onChange={handleChange} type="text" name='status' />
                <button>Save</button>
            </form>
            <ul className="list-group">
                {tasks.map((value: Task) => {
                    console.log(value)
                    return <>
                        <div key={value.name} className='container list-group-item list-group-item-action'>
                            <h5>Name:{value.name}</h5>
                            <h5>Edad:{value.edad}</h5>
                            <h5>Genero:{value.status}</h5>
                        </div>
                    </>
                })}
            </ul>
        </div>

    </>
}
export default Page;