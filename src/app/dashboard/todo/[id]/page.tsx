'use client'
import { api } from '~/trpc/react';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ToDoList({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const router = useRouter();
    let { id } = React.use(params)

    const { data } = api.todo.getById.useQuery({ id });
    return (
      <div>
        <h1>{data?.name}</h1>
      </div>
    )
  }