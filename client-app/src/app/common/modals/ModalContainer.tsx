import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/Store';
import { Modal, ModalContent } from 'semantic-ui-react';

const ModalContainer = () => {
    const {modalStore} = useStore()
  return (
    <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini'>
        <ModalContent content={modalStore.modal.body}>
            
        </ModalContent>
    </Modal>
  )
}

export default observer(ModalContainer);
