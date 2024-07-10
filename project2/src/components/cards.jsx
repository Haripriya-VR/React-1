import React from 'react'


function Cards({username = "Hari"}) {
  return (
    <>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="h-24 w-24 m-5  md:rounded-none rounded-full mx-auto" src="https://picsum.photos/200/300" alt="" width="484" height="312"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          {obj},Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  </>
  )
}

export default Cards
