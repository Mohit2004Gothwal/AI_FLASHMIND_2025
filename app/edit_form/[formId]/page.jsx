"use client"
import React from 'react'
import { db } from '../../../lib/db'
import { and, eq } from 'drizzle-orm'
import { json } from 'drizzle-orm/mysql-core';

function EditForm({params}) {

  const {user} =  useUser();
  const [jsonForm , setJsonForm] = useState([]);
  useEffect(()=>{
    user&&GetFormData();
  },[user])
  const GetFormData=async()=>{
    const result=await db.select().from(JSON)
    .where(and(eq(json.id,params?.formId)),
     eq(JSON.createdBy , user?.primaryEmailAddress?.emailAddress));
   
      console.log(JSON.parse(result[0].jsonform));
      setJsonForm(JSON.parse(result[0].jsonform))
  }
  return (
    <div>EditForm</div>
  )
}

export default EditForm