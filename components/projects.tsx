import { projectsData } from '@/lib/data';
import React from 'react';
import Project from '@/components/project';

export default function Projects() {
  return (
    <section
      id='projects' 
      className='max-w-[50rem] mb-28 scroll-mt-28'
    >
        <h2 className='text-3xl text-center font-medium mb-4 capitalize'>Projects</h2>

        {projectsData.map(function(project, index) {
            return (
                <Project key={index} {...project} />
            )
        })}
    </section>
  )
}