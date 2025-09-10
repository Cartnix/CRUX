import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextI {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

interface ModalProviderChildrenI {
    children: ReactNode
}

const ModalContext = createContext<ModalContextI | null>(null)

export function ModalProvider({children}: ModalProviderChildrenI)
{
    const [isOpen, setOpen] = useState<boolean>(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return(
        <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal()
{
    const context = useContext(ModalContext)
    if(!context) {
        throw new Error ("UseModal should be used without ModalProvider")
    }
    return context
}