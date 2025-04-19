'use client'
import { api } from '~/trpc/react';
import { useRouter } from 'next/navigation';

export default function CreateModal(
  { isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }
) {
  const router = useRouter();
  const { mutateAsync } = api.todo.create.useMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const data = await mutateAsync({ name });
    router.push(`/dashboard/todo/${data.id}`);
    handleClose();
  }

  return (
    <>
    {isOpen &&
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 shadow-2xl w-full max-w-md border border-gray-800/50 relative animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Create a new task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
              Task Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800/50 text-gray-100 border border-gray-700 rounded-xl px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
                transition-all duration-200 placeholder-gray-500"
              placeholder="Enter your task name"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-8">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-xl border border-gray-700 text-gray-300 
                hover:bg-gray-800 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
                hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
    }
      </>
  )
}