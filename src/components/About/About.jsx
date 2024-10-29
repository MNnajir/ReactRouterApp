import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Absolutely! React development tends to attract passionate developers because of its flexibility,
                       the ecosystem's vibrant community, and the excitement of building interactive, responsive web applications.
                        The component-based architecture encourages reusability and creativity,
                       making it an appealing choice for developers who enjoy crafting efficient and dynamic user interfaces. 
                      </p>
                      <p className="mt-4 text-gray-600">
                      Plus, with a huge support network and resources, it's a space where developers can continuously 
                      learn and push the boundaries of front-end development. Are you diving into React as well?
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}