import { Button } from "@mantine/core"
import { useSlideStore } from "@/entities/slide"
import { modals } from "@mantine/modals"

type Props = {
    slideId: string
}

export const DeleteSlideButton = ({ slideId }: Props) => {
    const removeSlide = useSlideStore((state) => state.removeSlide)

    const handlerClick = () => {
        modals.openConfirmModal({
            title: "Удалить слайд",
            children: "Вы действительно хотите удалить слайд?",
            labels: { confirm: "Удалить", cancel: "Отмена" },
            confirmProps: { color: "red" },
            onConfirm: () => removeSlide(slideId)
        })

    }
    return(
        <Button variant="outline" color="red" size="xs" onClick={handlerClick}>
            Удалить
        </Button>
    )
}