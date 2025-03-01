import React from 'react'
import p1Image from './p1.png'
import p2Image from './p2.png'
import p3Image from './p3.png'
import p4Image from './p4.png'
import p5Image from './p5.png'
import p6Image from './p6.png'

const projects = [
  { id: 1, title: 'Starweb Prohost', url: 'https://starwebcreation.com/' },
  {
    id: 2,
    title: 'Supplies Plus',
    url: 'https://suppliesplusautoproducts.com/pages/automotive-touchup-paint.html',
  },
  { id: 3, title: 'Bolting Symposium', url: 'https://boltingsymposium.com' },
  {
    id: 4,
    title: 'Build-a-Burger',
    url: 'https://build-a-burger-3emlcqm30-james-spyrous-projects.vercel.app/meals',
  },
  {
    id: 5,
    title: 'MooMoo',
    url: 'https://build-a-burger-3emlcqm30-james-spyrous-projects.vercel.app/',
  },
  { id: 6, title: 'My Portfolio', url: 'https://www.jamesspyrou.dev/' },
]

const MobileProjects = () => {
  return (
    <div className="min-h-screen p-8 grid gap-6 grid-cols-1">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 rounded-lg p-4 transition flex flex-col items-center"
        >
          <img
            src={
              project.id === 2
                ? p2Image
                : project.id === 3
                ? p3Image
                : project.id === 4
                ? p4Image
                : project.id === 5
                ? p5Image
                : project.id === 6
                ? p6Image
                : p1Image
            }
            alt={project.title}
            className="w-[440px] h-[290px] object-cover rounded-lg mb-4"
          />
          <h2 className="text-white text-xl text-center">{project.title}</h2>
        </a>
      ))}
    </div>
  )
}

export default MobileProjects
