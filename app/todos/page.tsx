import TodoList from "@/components/TodoList"
import { Header } from "@/components/Header"


export default function page(){
    return(
        <>  
            <Header />
            <h1>TODO LIST</h1>
            <div><TodoList /></div>
        </>
    )
}