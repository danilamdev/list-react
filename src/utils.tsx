import React from 'react'

export function openModal (modalRef: React.RefObject<HTMLDialogElement>): void {
  modalRef?.current?.showModal()
}

export function closeModal (modalRef: React.RefObject<HTMLDialogElement>): void {
  modalRef?.current?.close()
}
