import { useTasks } from '../../context/tasksContext';
import { Task } from '../../context/tasksContext';

const Page = () => {
    const { tasks }: any = useTasks();
    console.log(tasks)
    return <>
        {
            tasks.map((value: Task) => {
                return <>
                <div key={value.name}className='container list-group-item list-group-item-action'>
                    <h5>Name:{value.name}</h5>
                    <h5>Edad:{value.edad}</h5>
                    <h5>Genero:{value.status}</h5>
                </div>
                </>
            })
        }
    </>
}
export default Page;