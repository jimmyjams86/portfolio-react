import React from 'react'

function Projects() {
  const projectList = [
    { id: 1, title: 'Project One', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Project Two', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Project Three', image: 'https://via.placeholder.com/300' },
    { id: 4, title: 'Project Four', image: 'https://via.placeholder.com/300' },
    { id: 5, title: 'Project Five', image: 'https://via.placeholder.com/300' },
    { id: 6, title: 'Project Six', image: 'https://via.placeholder.com/300' },
    { id: 7, title: 'Project Seven', image: 'https://via.placeholder.com/300' },
    { id: 8, title: 'Project Eight', image: 'https://via.placeholder.com/300' },
    { id: 9, title: 'Project Nine', image: 'https://via.placeholder.com/300' },
    { id: 10, title: 'Project Ten', image: 'https://via.placeholder.com/300' },
    {
      id: 11,
      title: 'Project Eleven',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 12,
      title: 'Project Twelve',
      image: 'https://via.placeholder.com/300',
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
