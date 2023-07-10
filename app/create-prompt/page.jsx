"use client";

import React from 'react';
import Form from '@components/Form';
import { useState } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {

const [submitting, setsubmitting] = useState(false);
const [post, setPost] = useState({
  prompt: "",
  tag: "",
});

const createPrompt = async (e) => {

}

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
