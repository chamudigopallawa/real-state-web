import { assets, projectsData } from '../assets/assets'
import { useState, useEffect } from 'react';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1)
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <div className='container mx-auto py-2 pt-20 px-6 md:px-20 lg:px-25 w-full overflow-hidden' id='Projects'>
            <div className='text-center flex flex-col items-center'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Projects <span className='underline underline-offset-4 decoration under font-light'>Completed</span></h1>
                <p className='text-gray-500 max-w-80 mb-8'>Crafting spaces, creating legacies-Explore our portfolio</p>
            </div>

            {/*-------------Slider buttons-----------*/}
            <div className='flex justify-end items-center mb-8'>
                <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project' onClick={nextProject}>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button className='p-3 bg-gray-200 rounded' aria-label='Next project' onClick={prevProject}>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/*-------------Projects slider container-----------*/}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt="" className='w-full h-auto mb-14' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
