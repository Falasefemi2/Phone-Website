import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                            <ModalContainer>
                                <div className="container">
                                    <div id='modal' className="row">
                                        <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>Item added to the cart</h5>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                            );
                        }

                    }}
                </ProductConsumer>
            </div>
        );
    }
}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display: flex;
`;