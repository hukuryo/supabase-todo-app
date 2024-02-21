import { Header } from "@/components/Header"
import Head from "next/head";
import { createClient } from '@/utils/supabase/server';
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';


export default function page(){
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [posts, setPosts] = useState([]);
    const supabase = createClient();

    useEffect(() => {
      (async () => await indexPost())();
    }, []);

    const indexPost = async () => {
        try {
          const { data, error } = await supabase.from("posts").select("*");
          if (error) throw error;
          setPosts(data);
        } catch (error) {
          alert(error.message);
          setPosts([]);
        }
      };
  
    const addPost = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const { error } = await supabase.from("todos").insert([
          {
            title: newTitle,
            content: newContent,
          },
        ]);
        if (error) throw error;
        await indexPost();
        setNewTitle("");
        setNewContent("");
      } catch (error) {
        alert("データの新規登録ができません");
      }
    };
    return(
        <>  
            <Header />
            <h1>ADD TODO</h1>
            <form onSubmit={addPost}>
             <div>
                <label>タイトル</label><br/>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)} />
              </div>
              <div>
                <label>内容</label><br/>
                <textarea value={newContent} rows={10} cols={40}  onChange={(e) => setNewContent(e.target.value)}/>
              </div>
              <div>
                <button type="submit">登録</button>
              </div>
          </form>
        </>
    )
}