export interface Slide {
    id: string
    title: string
    annotation: string
    isChecked: boolean
}

export type SlideFormData = Omit<Slide, "id" | "isChecked">
