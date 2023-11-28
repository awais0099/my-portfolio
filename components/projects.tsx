"use client";
import { projectsData } from '@/lib/data';
import React, { useContext, useEffect } from 'react';
import Project from '@/components/project';
import { useInView } from 'react-intersection-observer';
import { ActiveSectionContext } from '@/store/store';

export default function Projects() {
  const ActiveSectionContextObj = useContext(ActiveSectionContext);
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.37,
  });

  useEffect(() => {
    if (inView) {
      ActiveSectionContextObj?.setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
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