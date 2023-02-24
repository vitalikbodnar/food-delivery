import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector} from "react-redux";
import {IRootState} from "../../Types/stateTypes/IRootState";
import BasketItem from "../BasketItem/BasketItem";
import {IPositionData} from "../../Types/stateTypes/IPositionState";
import "./basketModal.scss"

interface Props {
    show: boolean
    onHide: () => void
}

const BasketModal: React.FC<Props> = (props) => {
    const dataUrl = useSelector((state: IRootState) => state.position.cardPosition)
    return (
        <div className='headerWrapper'>
            <Modal
                {...props}
                size="lg"
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div>Basket</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {dataUrl.length > 0 ?
                        <div className="basketItemWrapper">
                            {dataUrl.map((item: IPositionData, index) => (
                                <BasketItem data={item} key={index}/>
                            ))}
                        </div>
                        :
                        <div className="emptyBasket">Basket is empty ;(</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant="danger">Close</Button>
                    <Button onClick={props.onHide} variant="success">Buy</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BasketModal;