
import React from 'react'

import { MdShoppingCart, MdKeyboardArrowLeft } from 'react-icons/md'
import { FaTrashAlt , FaCreditCard } from 'react-icons/fa'
import '../stylesheets/snap-card.css'
import '../stylesheets/order-cart.css'

class OrderCart extends React.Component {

    handleFold(){

        let SnapCard = document.body.querySelector(`#ORDER_CART`)
        SnapCard.classList.add(`--Fold-Off`)

    }

    render(){

        return (

            <div id="ORDER_CART" className="SnapCard-Container --Fold-Off">

                <div className="SnapCard-Container__Header --Bg-OrderCart">

                    <div className="Header__Item">
                        <MdShoppingCart className="Header__Item__Icon" />
                    </div>

                    <div className="Header__Item">
                        <h3 className="Header__Item__Text">장바구니</h3>
                    </div>

                    <div className="Header__Item">
                        <MdKeyboardArrowLeft onClick={this.handleFold} className="Header__Item__Icon --Fold" />
                    </div>
                </div>

                <div className="OrderCart-Container">
                
                    <div className="OrderCart__Header">
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">선택</span>
                        </div>
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">제품명</span>
                        </div>
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">수량</span>
                        </div>
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">가격</span>
                        </div>
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">사이즈</span>
                        </div>
                        <div className="OrderCart__Header__Item">
                            <span className="OrderCart__Header__Item__Text">정기배송</span>
                        </div>
                    </div>

                    <div className="OrderCart__Element">
                        <div className="OrderCart__Element__Item">
                            <input type="checkbox"/>
                        </div>
                        <div className="OrderCart__Element__Item">
                            <span className="OrderCart__Element__Item__Text">마스크 MK-101</span>
                        </div>
                        <div className="OrderCart__Element__Item">
                            <input className="OrderCart__Element__Item__Input-Number" type="Number"/>
                        </div>
                        <div className="OrderCart__Element__Item">
                            <span className="OrderCart__Element__Item__Text">100,000</span>
                        </div>
                        <div className="OrderCart__Element__Item">
                            <span className="OrderCart__Element__Item__Text">M</span>
                        </div>
                        <div className="OrderCart__Element__Item">
                            <span className="OrderCart__Element__Item__Text">O</span>
                        </div>
                    </div>

                </div>

                <div className="OrderCart-Controller">

                    <div className="Controller__Item">
                        <div className="Controller__Item__Btn" id="REMOVE_ITEM">
                            <FaTrashAlt className="Controller__Item__Btn__Icon" />
                            <span className="Controller__Item__Btn__Text">선택상품 삭제</span>
                        </div>
                        <div className="Controller__Item__Btn" id="GO_ORDER">
                            <FaCreditCard className="Controller__Item__Btn__Icon" />
                            <span className="Controller__Item__Btn__Text">주문하기</span>
                        </div>
                    </div>

                    <div className="Controller__Item">
                    </div>

                    <div className="Controller__Item Credit-Box">
                        <span className="Credit-Box__Text">총액</span>
                        <span className="Credit-Box__Divider">:</span>
                        <span className="Credit-Box__Text">{`76,000`}</span>
                    </div>

                </div>

            </div>

        )

    }


}

export default OrderCart