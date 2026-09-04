import { persist } from "zustand/middleware"
import type { Slide, SlideFormData } from "./types"
import { create } from "zustand"

interface SlideStore {
    slides: Slide[]
    addSlide: (slide: SlideFormData) => void
    removeSlide: (id: string) => void
    toggleSlideChecked: (id: string) => void
}

const initialSlides: Slide[] = [
        {
            id: '1',
            title: 'Slide 1',
            annotation: 'Annotation 1',
            isChecked: false
        },
        {
            id: '2',
            title: 'Slide 2',
            annotation: 'Annotation 2',
            isChecked: false
        },
        {
            id: '3',
            title: 'Slide 3',
            annotation: 'Annotation 3',
            isChecked: false
        },
        {
            id: '4',
            title: 'Slide 4',
            annotation: 'Annotation 4',
            isChecked: false
        },
        {
            id: '5',
            title: 'Slide 5',
            annotation: 'Annotation 5',
            isChecked: false
        },
]

export const useSlideStore = create<SlideStore>()(
    persist(
    (set) => ({
        slides: initialSlides,
        addSlide: ({ title, annotation }) => 
        set((state) => ({
            slides: [
                ...state.slides, 
                {
                    id: crypto.randomUUID(),
                    title,
                    annotation,
                    isChecked: false,
                }
            ]
        })),
        removeSlide: (id) => set((state) => ({
            slides: state.slides.filter((slide) => slide.id !== id)
        })),
        toggleSlideChecked: (id) => set((state) => ({
            slides: state.slides.map((slide) =>
                slide.id === id ? { ...slide, isChecked: !slide.isChecked } : slide
            )
        }))
}), { name: "slides" }))
