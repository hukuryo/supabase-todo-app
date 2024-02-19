import { createClient } from '@/utils/supabase/server';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  type todos = {
    id: number;
    title: string;
    contents: string;
    start_date: Date;
    end_date: Date;
  }
  

export default async function TodoList() {
  const supabase = createClient();
  const { data: todos = [] } = await supabase.from("todos").select();
  const todoList: todos[] = todos || [];

  return (
    <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>content</TableHead>
            <TableHead className="text-right">start</TableHead>
            <TableHead className="text-right">end</TableHead>
            </TableRow>
        </TableHeader>
        
        <TableBody>
            {todoList && todoList.map((todo) => (
                <TableRow key={todo.id}>
                    <TableCell className="font-medium">{todo.id}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{todo.contents}</TableCell>
                    <TableCell>{todo.start_date.toString()}</TableCell>
                    <TableCell className="text-right">{todo.end_date.toString()}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);
}