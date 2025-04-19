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
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {data?.name}
          </h1>
          <div className="space-y-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            {data?.items.map((item) => (
              <div key={item.id} className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200">
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    className="peer h-5 w-5 appearance-none rounded-md border-2 border-purple-500/50 bg-gray-800/50
                      checked:border-transparent checked:bg-gradient-to-r checked:from-purple-500 checked:to-pink-500
                      hover:border-purple-400/70 focus:ring-2 focus:ring-purple-500/30 focus:ring-offset-0
                      transition-all duration-200 cursor-pointer"
                  />
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0
                      peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={`text-gray-200 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                  {item.name}
                </span>
              </div>
            ))}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
                hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-purple-500/50">
                Create New Item
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }