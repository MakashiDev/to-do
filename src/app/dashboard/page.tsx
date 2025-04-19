'use client'
import { api } from '~/trpc/react';
import CreateModal from '../_components/create-list-modal';
import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import Router from 'next/router';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const { data } = api.todo.getAll.useQuery();  
   const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  
  const { isLoaded, isSignedIn } = useAuth()
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-medium text-gray-300 animate-pulse">
            Loading your tasks...
          </p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    // You could also add a redirect to the sign-in page here
    Router.push('/sign-in')
  } 
  
 

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black p-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-gradient">
          Your Tasks
        </h1>
        <div className="space-y-6">
          {data?.map((todo) => (
            <div 
              key={todo.id} 
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                       hover:border-purple-500/50 transition-all duration-300 ease-in-out 
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transform hover:scale-[1.02] cursor-pointer"
                       onClick={() => router.push(`/dashboard/todo/${todo.id}`)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-pulse"></div>
                  <h2 className="text-xl text-gray-100 font-medium group-hover:text-white transition-colors">
                    {todo.name}
                  </h2>
                </div>
                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/30">
                  {todo.createdAt.toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}
                </span>
              </div>
            </div>
          ))}

          <div  
            className="group p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl 
                     border border-gray-800 hover:border-purple-500/50
                     transition-all duration-300 ease-in-out 
                     hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                     cursor-pointer transform hover:scale-[1.02]"
            onClick={handleOpen}
          >
            <div className="flex justify-center items-center space-x-3">
              <svg 
                className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h2 className="text-xl text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                Create New Task
              </h2>
            </div>
          </div>
        </div>
      </div>
      <CreateModal isOpen={isModalOpen} handleClose={handleClose}/>
    </div>
  );
}
