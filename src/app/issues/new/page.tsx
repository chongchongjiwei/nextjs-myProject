"use client";
import { Button, TextArea, TextField ,} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";

import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { 
  ssr: false  // 禁用服务端渲染
});


interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router= useRouter();
  return (
       <form className="max-w-xl space-y-3"
         onSubmit={handleSubmit(async (data) => {
           {/* 使用 axios 进行 post */}
           await axios.post("/api/issues", data);
           router.push("/issues");
         })}>
      {/* <TextField.Root>
        <TextField.input placeholder="Title" />
      </TextField.Root> */}
      <TextField.Root placeholder="Title" {...register("title")}>
        {/* <TextField.Slot /> */}
</TextField.Root>

      {/* <TextArea placeholder="Description" /> */}
      {/* 由于 simpleMDE 不能直接像上面的 Input 一样传入参数，我们这里使用 React Hook Form 中的 Controller */}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New</Button>
    </form>
  );
};
export default NewIssuePage;